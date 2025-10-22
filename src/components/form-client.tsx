'use client'

import { useState } from 'react'
import { Button } from './button'
import { Paragraph } from './paragraph'

export function FormClient() {
  const [status, setStatus] = useState('')

  const clearForm = (event: any) => {
    event.target.reset()
  }

  const submit = async (e: any) => {
    e.preventDefault()
    setStatus('Sending...')

    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      liveInLubbock: e.target.liveInLubbock.value,
      relocateToLubbock: e.target.relocateToLubbock.value,
      position: e.target.position.value,
      defineMidwifery: e.target.defineMidwifery.value,
      hearAboutUs: e.target.hearAboutUs.value,
      interestReason: e.target.interestReason.value,
      birthExperience: e.target.birthExperience.value,
      resume: e.target.resume.files,
      references: [
        {
          firstName: e.target.ref1First.value,
          lastName: e.target.ref1Last.value,
          email: e.target.ref1Email.value,
          phone: e.target.ref1Phone.value,
        },
        {
          firstName: e.target.ref2First.value,
          lastName: e.target.ref2Last.value,
          email: e.target.ref2Email.value,
          phone: e.target.ref2Phone.value,
        },
        {
          firstName: e.target.ref3First.value,
          lastName: e.target.ref3Last.value,
          email: e.target.ref3Email.value,
          phone: e.target.ref3Phone.value,
        },
      ],
    }

    const response = await fetch('/api/message/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    const data = await response.json()

    if (data.message === 'Message sent. Thank You.') {
      clearForm(e)
    }

    setStatus(data.message)
  }

  return (
    <form
      action="#"
      method="POST"
      className="lg:flex-auto space-y-6"
      onSubmit={submit}
    >
      {/* First & Last Name */}
      <div className="grid grid-cols-2 gap-6">
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name*"
          className="w-full rounded-lg bg-body2 p-4 text-contrast outline outline-2 outline-accent2/25 placeholder:text-contrast/50 focus:outline-accent2/80"
          required
        />
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name*"
          className="w-full rounded-lg bg-body2 p-4 text-contrast outline outline-2 outline-accent2/25 placeholder:text-contrast/50 focus:outline-accent2/80"
          required
        />
      </div>

      {/* Email */}
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email*"
        className="w-full rounded-lg bg-body2 p-4 text-contrast outline outline-2 outline-accent2/25 placeholder:text-contrast/50 focus:outline-accent2/80"
        required
      />

      {/* Phone */}
      <input
        id="phone"
        name="phone"
        type="tel"
        placeholder="Phone"
        className="w-full rounded-lg bg-body2 p-4 text-contrast outline outline-2 outline-accent2/25 placeholder:text-contrast/50 focus:outline-accent2/80"
      />

      {/* Lubbock Questions */}
      <Paragraph color="text-contrast">
        Do you currently live in Lubbock?
      </Paragraph>
      <div className="flex gap-6">
        <label>
          <input
            type="radio"
            name="liveInLubbock"
            value="Yes"
            required
          />{' '}
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="liveInLubbock"
            value="No"
            required
          />{' '}
          No
        </label>
      </div>

      <Paragraph color="text-contrast">
        Planning on relocating to Lubbock?
      </Paragraph>
      <div className="flex gap-6">
        <label>
          <input
            type="radio"
            name="relocateToLubbock"
            value="Yes"
            required
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="relocateToLubbock"
            value="No"
            required
          />{' '}
          No
        </label>
      </div>

      {/* Position Selection */}
      <Paragraph color="text-contrast">
        Which position are you interested in?*
      </Paragraph>
      <div className="flex flex-col gap-2">
        <label>
          <input
            type="radio"
            name="position"
            value="Midwife"
            required
          />
          Midwife
        </label>
        <label>
          <input
            type="radio"
            name="position"
            value="Student Midwife"
          />{' '}
          Student Midwife
        </label>
        <label>
          <input
            type="radio"
            name="position"
            value="Receptionist"
          />
          Receptionist
        </label>
      </div>

      {/* Define Midwifery */}
      <textarea
        id="defineMidwifery"
        name="defineMidwifery"
        placeholder="Please define what midwifery is"
        rows={4}
        className="w-full rounded-lg bg-body2 p-4 text-contrast outline outline-2 outline-accent2/25 placeholder:text-contrast/50 focus:outline-accent2/80"
      />

      {/* How did you hear about us */}
      <textarea
        id="hearAboutUs"
        name="hearAboutUs"
        placeholder="How did you hear about Speedwell?*"
        rows={3}
        className="w-full rounded-lg bg-body2 p-4 text-contrast outline outline-2 outline-accent2/25 placeholder:text-contrast/50 focus:outline-accent2/80"
        required
      />

      {/* Why interested */}
      <textarea
        id="interestReason"
        name="interestReason"
        placeholder="Why are you interested in working with Speedwell?"
        rows={3}
        className="w-full rounded-lg bg-body2 p-4 text-contrast outline outline-2 outline-accent2/25 placeholder:text-contrast/50 focus:outline-accent2/80"
      />

      {/* Birth Work Experience */}
      <textarea
        id="birthExperience"
        name="birthExperience"
        placeholder="Describe any previous birth work experience in detail"
        rows={4}
        className="w-full rounded-lg bg-body2 p-4 text-contrast outline outline-2 outline-accent2/25 placeholder:text-contrast/50 focus:outline-accent2/80"
      />

      {/* Resume Upload */}
      <div>
        <label className="block text-contrast mb-2">Job Resume / CV</label>
        <input
          id="resume"
          name="resume"
          type="file"
          multiple
          accept=".pdf,.doc,.docx"
          className="block w-full text-sm text-contrast file:mr-4 file:rounded-lg file:border-0 file:bg-accent2 file:px-4 file:py-2 file:text-white hover:file:bg-accent2/80"
        />
        <p className="text-xs mt-1 text-contrast/70">
          You can upload up to 3 files.
        </p>
      </div>

      {/* References */}
      <div className="space-y-4">
        <h3 className="text-lg text-contrast">Reference Contact Information</h3>
        <p className="text-sm text-contrast/70">
          Preferably 2 midwives you have worked with and most recent employer.
        </p>

        {[1, 2, 3].map((refNum) => (
          <div
            key={refNum}
            className="space-y-3 border p-4 rounded-lg"
          >
            <h4 className="font-medium text-contrast">
              Reference Person {refNum}
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <input
                name={`ref${refNum}First`}
                placeholder="First Name*"
                className="rounded-lg bg-body2 p-3 outline outline-2 outline-accent2/25"
                required={refNum === 1}
              />
              <input
                name={`ref${refNum}Last`}
                placeholder="Last Name*"
                className="rounded-lg bg-body2 p-3 outline outline-2 outline-accent2/25"
                required={refNum === 1}
              />
            </div>
            <input
              type="email"
              name={`ref${refNum}Email`}
              placeholder="Email*"
              className="w-full rounded-lg bg-body2 p-3 outline outline-2 outline-accent2/25"
              required={refNum === 1}
            />
            <input
              type="tel"
              name={`ref${refNum}Phone`}
              placeholder="Phone*"
              className="w-full rounded-lg bg-body2 p-3 outline outline-2 outline-accent2/25"
              required={refNum === 1}
            />
          </div>
        ))}
      </div>

      {/* Status Message */}
      {status.length > 0 && (
        <p
          className={
            (status === 'Message sent. Thank You.' || status === 'Sending...'
              ? 'text-accent '
              : 'text-[red] ') + ' pt-2'
          }
        >
          {status}
        </p>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full rounded-lg mt-6"
      >
        Submit
      </Button>
    </form>
  )
}
