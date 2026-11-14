import { getCloudflareContext } from '@opennextjs/cloudflare'

// Site mail goes out through Cloudflare Email Service: the EMAIL binding
// (send_email in wrangler.jsonc), from an address on EMAIL_DOMAIN. In
// `npm run dev` the binding is simulated and no mail leaves the machine.

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

function getEmailBinding(): EmailBinding {
  if (!process.env.EMAIL_DOMAIN) throw new Error('EMAIL_DOMAIN is not set')
  const { env } = getCloudflareContext()
  const mailer = (env as unknown as { EMAIL?: EmailBinding }).EMAIL
  if (!mailer) {
    throw new Error('The Worker has no EMAIL binding (see wrangler.jsonc)')
  }
  return mailer
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

/**
 * Sends a site email to the owner, with a copy to the developer. The submitter
 * never gets a copy: a bot could otherwise use a form to send mail to any
 * address. Pass them as `replyTo` instead.
 *
 * @returns Whether Cloudflare accepted the message
 */
export async function sendEmail(options: SendEmailOptions): Promise<boolean> {
  try {
    return await sendWithCloudflare(getEmailBinding(), options)
  } catch (error) {
    const { code, message } = error as { code?: string; message?: string }
    console.error('send-email: email not sent', code, message)
    return false
  }
}
