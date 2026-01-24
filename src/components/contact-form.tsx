'use client'

import { useState } from 'react'
import { Button } from './button'

export function ContactForm() {
  const [status, setStatus] = useState('')

  const clearForm = (event: any) => {
    event.target.name.value = ''
    event.target.email.value = ''
    event.target.subject.value = ''
    event.target.message.value = ''
  }

  const submit = async (e: any) => {
    e.preventDefault()
    setStatus('Sending...')

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }

    const response = await fetch('/api/message/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    const data = await response.json()

    if (data.message == 'Message sent. Thank You.') {
      clearForm(e)
    }

    setStatus(data.message)
  }
  return (
    <form
      action="#"
      method="POST"
      className="lg:flex-auto"
      onSubmit={submit}
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-6">
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="given-name"
          placeholder="Name*"
          className="w-full rounded-lg bg-body2 p-4 text-contrast outline outline-2 -outline-offset-1 outline-accent2/25 placeholder:text-contrast/50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-accent2/80 focus:ring-0"
        />
        <input
          id="email"
          name="email"
          type="text"
          autoComplete="email"
          placeholder="Email*"
          className="w-full rounded-lg bg-body2 p-4 text-contrast outline outline-2 -outline-offset-1 outline-accent2/25 placeholder:text-contrast/50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-accent2/80 focus:ring-0"
        />
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Subject"
          className="w-full rounded-lg bg-body2 p-4 text-contrast outline outline-2 -outline-offset-1 outline-accent2/25 placeholder:text-contrast/50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-accent2/80 focus:ring-0"
        />
        <textarea
          id="message"
          name="message"
          placeholder="Message*"
          rows={4}
          className="w-full rounded-lg bg-body2 p-4 text-contrast outline outline-2 -outline-offset-1 outline-accent2/25 placeholder:text-contrast/50 focus:outline-accent focus:outline-2 focus:-outline-offset-2 focus:outline-accent2/80 focus:ring-0 "
          defaultValue={''}
        />
      </div>
      {status.length > 0 && (
        <p
          className={
            (status == 'Message sent. Thank You.' || status == 'Sending...'
              ? 'text-accent '
              : 'text-[red] ') + ' pt-2'
          }
        >
          {status}
        </p>
      )}
      <Button
        type="submit"
        className="w-full rounded-lg mt-6"
      >
        Let’s talk
      </Button>
    </form>
  )
}
