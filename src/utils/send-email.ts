import { getCloudflareContext } from '@opennextjs/cloudflare'

// Site mail goes out through one of two providers, chosen by configuration:
//
//   Cloudflare Email Service  EMAIL_DOMAIN is set and the Worker has the EMAIL
//                             binding (send_email in wrangler.jsonc)
//   Mailgun                   otherwise, when MAILGUN_API_KEY is set (Vercel)

type EmailAddress = string | { email: string; name?: string }

export interface EmailAttachment {
  /** Base64, without the data: prefix */
  content: string
  filename: string
  type: string
}

interface SendEmailOptions {
  subject: string
  html: string
  replyTo?: { email: string; name?: string }
  attachments?: EmailAttachment[]
  /** Send to the developer only, never to the site owner */
  devOnly?: boolean
}

// Cloudflare Email Service binding
interface EmailBinding {
  send(message: {
    to: EmailAddress | EmailAddress[]
    from: EmailAddress
    subject: string
    html?: string
    text?: string
    cc?: EmailAddress | EmailAddress[]
    bcc?: EmailAddress | EmailAddress[]
    replyTo?: EmailAddress
    attachments?: (EmailAttachment & {
      disposition: 'attachment' | 'inline'
    })[]
  }): Promise<{ messageId: string }>
}

function getEmailBinding(): EmailBinding | undefined {
  if (!process.env.EMAIL_DOMAIN) return undefined
  try {
    const { env } = getCloudflareContext()
    return (env as unknown as { EMAIL?: EmailBinding }).EMAIL
  } catch {
    // Not running on Cloudflare
    return undefined
  }
}

async function sendWithCloudflare(
  mailer: EmailBinding,
  { subject, html, replyTo, attachments = [], devOnly }: SendEmailOptions
) {
  const fromName = process.env.EMAIL_FROM_NAME || 'Website'
  const devAddress: EmailAddress = {
    email: String(process.env.EMAIL_DEV_TO),
    name: process.env.EMAIL_DEV_NAME || 'Developer',
  }

  const result = await mailer.send({
    from: { email: `contact@${process.env.EMAIL_DOMAIN}`, name: fromName },
    to: devOnly
      ? devAddress
      : { email: String(process.env.EMAIL_TO), name: fromName },
    // The developer is copied openly, so the client can see who else has it
    ...(!devOnly && { cc: devAddress }),
    ...(replyTo && { replyTo }),
    subject,
    html,
    ...(attachments.length && {
      attachments: attachments.map((file) => ({
        ...file,
        disposition: 'attachment' as const,
      })),
    }),
  })
  return Boolean(result.messageId)
}

async function sendWithMailgun({
  subject,
  html,
  replyTo,
  attachments = [],
  devOnly,
}: SendEmailOptions) {
  const fromName = process.env.MAILGUN_FROM_NAME
  const devAddress = `${process.env.MAILGUN_DEV_NAME} <${process.env.MAILGUN_DEV_MAIL}>`

  const body = new FormData()
  body.append(
    'from',
    `${fromName} <contact@${process.env.MAILGUN_DOMAIN_NAME}>`
  )
  body.append(
    'to',
    devOnly ? devAddress : `${fromName} <${process.env.MAILGUN_SMTP_MAIL}>`
  )
  if (!devOnly) body.append('cc', devAddress)
  if (replyTo) {
    body.append(
      'h:Reply-To',
      replyTo.name ? `${replyTo.name} <${replyTo.email}>` : replyTo.email
    )
  }
  body.append('subject', subject)
  body.append('html', html)
  for (const file of attachments) {
    const buffer = Buffer.from(file.content, 'base64')
    body.append(
      'attachment',
      new File([buffer], file.filename, { type: file.type })
    )
  }

  const resp = await fetch(
    `https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN_NAME}/messages`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`api:${process.env.MAILGUN_API_KEY}`).toString('base64')}`,
      },
      body,
    }
  )

  const text = await resp.text()
  try {
    return text !== 'Forbidden' && Boolean(JSON.parse(text).id)
  } catch {
    throw new Error(`Mailgun answered ${resp.status}: ${text.slice(0, 200)}`)
  }
}

/**
 * Sends a site email to the owner, with a copy to the developer. The submitter
 * never gets a copy: a bot could otherwise use a form to send mail to any
 * address. Pass them as `replyTo` instead.
 *
 * @returns Whether the provider accepted the message
 */
export async function sendEmail(options: SendEmailOptions): Promise<boolean> {
  try {
    const mailer = getEmailBinding()
    if (mailer) return await sendWithCloudflare(mailer, options)
    if (process.env.MAILGUN_API_KEY) return await sendWithMailgun(options)
    throw new Error(
      'No mail provider is configured: set EMAIL_DOMAIN (Cloudflare) or MAILGUN_API_KEY'
    )
  } catch (error) {
    const { code, message } = error as { code?: string; message?: string }
    console.error('send-email: email not sent', code, message)
    return false
  }
}
