import { NextResponse } from 'next/server'

function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

function encodeFormData(data: any) {
  const formData = new FormData()
  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => formData.append(key, v))
    } else {
      formData.append(key, value as any)
    }
  })
  return formData
}

export async function POST(req: Request) {
  const formData = await req.json()

  const {
    firstName,
    lastName,
    email,
    phone,
    lubbockStatus,
    position,
    defineMidwifery,
    hearAboutUs,
    interestReason,
    birthExperience,
    files = [],
    ref1First,
    ref1Last,
    ref1Email,
    ref1Phone,
    ref2First,
    ref2Last,
    ref2Email,
    ref2Phone,
    ref3First,
    ref3Last,
    ref3Email,
    ref3Phone,
  } = formData

  if (!firstName || !lastName || !email) {
    return new Response(JSON.stringify({ message: 'Input fields missing.' }), {
      status: 400,
    })
  }

  if (!isValidEmail(email)) {
    return new Response(JSON.stringify({ message: 'Invalid email address.' }), {
      status: 400,
    })
  }

  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
        body {
            background-color: #f7f7f7;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            width: 100%;
        }
        .container {
            max-width: 650px;
            margin: auto;
            background: #ffffff;
            padding: 30px;
            border-radius: 8px;
        }
        .logo {
            display: block;
            margin: 0 auto 20px;
            max-width: 200px;
        }
        .info {
            margin-bottom: 12px;
            color: #000;
            font-size: 1rem;
        }
        .textarea-block {
            margin-top: 6px;
            margin-bottom: 18px;
            padding: 10px;
            background: #f1f1f1;
            border-radius: 6px;
        }
        .textarea-content {
            white-space: pre-wrap;
            font-size: 0.95rem;
            color: #333;
        }
        .reference-group {
            margin-top: 20px;
        }
        ul {
            margin: 0;
            padding-left: 20px;
            color: #333;
        }
        </style>
    </head>
    <body>
        <div class="container">
        <img
            src="/images/logo-700x278.png"
            alt="Logo"
            class="logo"
        />
        <h2>Job Application Submission</h2>

        <p class="info"><strong>Full Name:</strong> ${firstName} ${lastName}</p>
        <p class="info"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        ${phone ? `<p class="info"><strong>Phone:</strong> ${phone}</p>` : ''}
        ${lubbockStatus ? `<p class="info"><strong>Lubbock Status:</strong> ${lubbockStatus}</p>` : ''}
        ${
          position && position.length
            ? `<p class="info"><strong>Position(s) Applied For:</strong> ${position.join(', ')}</p>`
            : ''
        }

        ${
          defineMidwifery && defineMidwifery.trim() !== ''
            ? `
                <p class="info"><strong>Definition of Midwifery:</strong></p>
                <div class="textarea-block">
                <div class="textarea-content">${defineMidwifery}</div>
                </div>
            `
            : ''
        }

        ${
          hearAboutUs && hearAboutUs.trim() !== ''
            ? `
                <p class="info"><strong>How Did You Hear About Us?</strong></p>
                <div class="textarea-block">
                <div class="textarea-content">${hearAboutUs}</div>
                </div>
            `
            : ''
        }

        ${
          interestReason && interestReason.trim() !== ''
            ? `
                <p class="info"><strong>Reason for Interest:</strong></p>
                <div class="textarea-block">
                <div class="textarea-content">${interestReason}</div>
                </div>
            `
            : ''
        }

        ${
          birthExperience && birthExperience.trim() !== ''
            ? `
                <p class="info"><strong>Previous Birth Experience:</strong></p>
                <div class="textarea-block">
                <div class="textarea-content">${birthExperience}</div>
                </div>
            `
            : ''
        }

        ${
          files && files.length
            ? `
                <p class="info"><strong>Uploaded Files:</strong></p>
                <div class="textarea-block">
                <ul>
                    ${files.map((file: any) => `<li>${file.name}</li>`).join('')}
                </ul>
                </div>
            `
            : ''
        }

        <h3>Reference Contacts</h3>
        <div class="reference-group">
            ${
              [ref1First, ref1Last].filter(Boolean).length
                ? `<p class="info"><strong>Reference 1 Name:</strong> ${[ref1First, ref1Last].filter(Boolean).join(' ')}</p>`
                : ''
            }
            ${ref1Email ? `<p class="info"><strong>Email:</strong> ${ref1Email}</p>` : ''}
            ${ref1Phone ? `<p class="info"><strong>Phone:</strong> ${ref1Phone}</p>` : ''}
        </div>

        <div class="reference-group">
            ${
              [ref2First, ref2Last].filter(Boolean).length
                ? `<p class="info"><strong>Reference 2 Name:</strong> ${[ref2First, ref2Last].filter(Boolean).join(' ')}</p>`
                : ''
            }
            ${ref2Email ? `<p class="info"><strong>Email:</strong> ${ref2Email}</p>` : ''}
            ${ref2Phone ? `<p class="info"><strong>Phone:</strong> ${ref2Phone}</p>` : ''}
        </div>

        <div class="reference-group">
            ${
              [ref3First, ref3Last].filter(Boolean).length
                ? `<p class="info"><strong>Reference 3 Name:</strong> ${[ref3First, ref3Last].filter(Boolean).join(' ')}</p>`
                : ''
            }
            ${ref3Email ? `<p class="info"><strong>Email:</strong> ${ref3Email}</p>` : ''}
            ${ref3Phone ? `<p class="info"><strong>Phone:</strong> ${ref3Phone}</p>` : ''}
        </div>
        </div>
    </body>
    </html>
  `

  const isDevelopment = process.env.NODE_ENV === 'development'
  const productionUrlClean = process.env.NEXT_PUBLIC_PRODUCTION_URL?.replace(
    /^https?:\/\//,
    ''
  )

  const body: Record<string, any> = {
    from: `${process.env.MAILGUN_FROM_NAME} <contact@${process.env.MAILGUN_DOMAIN_NAME}>`,
    to: isDevelopment
      ? `${process.env.MAILGUN_DEV_NAME} <${process.env.MAILGUN_DEV_MAIL}>`
      : `${process.env.MAILGUN_FROM_NAME} <${process.env.MAILGUN_SMTP_MAIL}>`,
    ...(!isDevelopment && {
      bcc: [
        `${process.env.MAILGUN_DEV_NAME} <${process.env.MAILGUN_DEV_MAIL}>`,
        `${firstName} <${email}>`,
      ],
    }),
    'h:Reply-To': `${firstName} <${email}>`,
    subject: `${firstName}: Job Application ${productionUrlClean}`,
    html: emailHtml,
  }

  if (files && files.length > 0) {
    body.attachment = files.map((file: any) => {
      const buffer = Buffer.from(file.base64.split(',')[1], 'base64')
      return new File([buffer], file.name, { type: file.type })
    })
  }

  const resp = await fetch(
    `https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN_NAME}/messages`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`api:${process.env.MAILGUN_API_KEY}`).toString('base64')}`,
      },
      body: encodeFormData(body),
    }
  )

  const data = await resp.text()

  const response =
    data !== 'Forbidden' && JSON.parse(data).id
      ? 'Message sent. Thank you.'
      : 'An error occurred.'

  return NextResponse.json({ message: response })
}
