'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from './button'
import { Paragraph } from './paragraph'
import clsx from 'clsx'
import arrowPathIcon from '@iconify/icons-heroicons/arrow-path'
import { Icon } from './icon'
import React, { Children, isValidElement } from 'react'

function Form({
  classname,
  children,
  gap = 'gap-8',
  flexDirection = 'flex-col',
}: {
  classname?: string
  children: React.ReactNode
  gap?: string
  flexDirection?: string
}) {
  const [status, setStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const fileToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = (error) => reject(error)
    })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    const form = e.currentTarget
    const fd = new FormData(form)
    const obj: Record<string, any> = {}

    let submitMessage = ''

    const submitter = (e.nativeEvent as SubmitEvent)?.submitter as
      | HTMLButtonElement
      | HTMLInputElement
      | null

    const buttonMessage = submitter?.getAttribute?.('data-message') || null
    const hasButtonMessage = Boolean(buttonMessage)
    if (hasButtonMessage) submitMessage = buttonMessage as string

    const cssEscape = (s: string) =>
      typeof CSS !== 'undefined' && (CSS as any).escape
        ? (CSS as any).escape(s)
        : s.replace(/["\\]/g, '\\$&')

    const getFieldLabel = (domName: string) => {
      const nameSel = cssEscape(domName)
      const el = form.querySelector<HTMLElement>(`[name="${nameSel}"]`)
      return el?.getAttribute('data-label') || null
    }

    const getSubmitMessage = (domName: string) => {
      const nameSel = cssEscape(domName)
      const el = form.querySelector<HTMLElement>(`[name="${nameSel}"]`)
      return el?.getAttribute('data-message') || null
    }

    for (const [k, v] of fd) {
      const isArray = k.endsWith('[]')
      const key = isArray ? k.slice(0, -2) : k
      const val = v instanceof File ? v : String(v)

      const label = getFieldLabel(k)

      if (!hasButtonMessage) {
        const fieldMsg = getSubmitMessage(k)
        if (fieldMsg) submitMessage = fieldMsg
      }

      if (key === 'files') {
        if (!obj[key]) obj[key] = []
        if (val instanceof File && val.name) {
          const base64 = await fileToBase64(val)
          obj[key].push({
            name: val.name,
            type: val.type,
            size: val.size,
            base64,
            label,
          })
        }
        continue
      }

      if (isArray) {
        if (!obj[key]) obj[key] = { value: [], label }
        if (!Array.isArray(obj[key].value)) obj[key].value = []
        obj[key].value.push(val)
        if (!obj[key].label && label) obj[key].label = label
        continue
      }

      obj[key] = { value: val, label }
    }

    const api = '/api/submit-form/'
    const response = await fetch(api, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj),
    })

    if (response.ok) {
      form.reset()
      form
        .querySelectorAll<HTMLInputElement>('input[type="file"]')
        .forEach((input) => {
          input.value = ''
        })
      form.dispatchEvent(new Event('form-cleared', { bubbles: true }))
    } else {
      submitMessage = 'An error occurred.'
    }

    setIsLoading(false)
    setStatus(submitMessage)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={clsx('flex', flexDirection, gap, classname)}
      >
        {Children.map(children, (child) => {
          if (
            isValidElement(child) &&
            (child.props as any)?.name === 'submit'
          ) {
            const btn = child as React.ReactElement<FormButtonProps>
            return React.cloneElement<FormButtonProps>(btn, { isLoading })
          }
          return child
        })}
      </form>
      {status && (
        <p className="text-center text-sm font-medium text-gray-700 mt-4">
          {status}
        </p>
      )}
    </>
  )
}

type FormInputProps = {
  id?: string
  name: string
  type?: React.HTMLInputTypeAttribute
  placeholder?: string
  autoComplete?: string
  required?: boolean
  hidden?: boolean
  defaultValue?: string
  className?: string
  label?: string
}

const FormInput = ({
  id,
  name,
  type = 'text',
  placeholder,
  autoComplete,
  required,
  hidden,
  defaultValue,
  className = '',
  label = '',
}: FormInputProps) => (
  <input
    id={id ?? name}
    name={name}
    type={type}
    placeholder={placeholder}
    autoComplete={autoComplete}
    required={required}
    hidden={hidden}
    defaultValue={defaultValue}
    data-label={label}
    className={`w-full rounded-lg bg-body2 p-4 text-contrast font-medium outline outline-2 -outline-offset-1 outline-accent2/25 
      placeholder:text-contrast/50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-accent2/80 focus:ring-0 ${className}`}
  />
)

type FormTextAreaProps = {
  id?: string
  name: string
  placeholder?: string
  rows?: number
  required?: boolean
  defaultValue?: string
  className?: string
  label?: string
}

const FormTextArea = ({
  id,
  name,
  placeholder,
  rows = 4,
  required,
  defaultValue,
  className = '',
  label = '',
}: FormTextAreaProps) => (
  <textarea
    id={id ?? name}
    name={name}
    placeholder={placeholder}
    rows={rows}
    required={required}
    defaultValue={defaultValue}
    data-label={label}
    className={`w-full rounded-lg bg-body2 p-4 text-contrast font-medium outline outline-2 -outline-offset-1 outline-accent2/25 placeholder:text-contrast/50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-accent2/80 focus:ring-0 ${className}`}
  />
)

type FormUploadProps = {
  id?: string
  name: string
  multiple?: boolean
  accept?: string
  required?: boolean
  className?: string
  maxFiles?: number
  label?: string
}

const FormUpload = ({
  id,
  name,
  multiple = true,
  accept = '.pdf,.doc,.docx',
  required,
  className = '',
  maxFiles = 3,
  label = '',
}: FormUploadProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [files, setFiles] = useState<File[]>([])
  const [error, setError] = useState<string | null>(null)

  const keyOf = (f: File) => `${f.name}-${f.size}-${f.lastModified}`

  const syncInput = (list: File[]) => {
    const input = inputRef.current
    if (!input) return
    const dt = new DataTransfer()
    list.forEach((f) => dt.items.add(f))
    input.files = dt.files
  }

  const setWithLimit = (next: File[], addedCount = 0) => {
    const capped = next.slice(0, maxFiles)
    if (capped.length < next.length) setError(`Only ${maxFiles} files allowed.`)
    else if (addedCount) setError(null)
    setFiles(capped)
    syncInput(capped)
  }

  const addFiles = (incoming: FileList | File[]) => {
    const list = Array.from(incoming)
    const map = new Map(files.map((f) => [keyOf(f), f]))
    list.forEach((f) => map.set(keyOf(f), f))
    setWithLimit(Array.from(map.values()), list.length)
  }

  const removeAt = (i: number) => {
    const next = files.filter((_, idx) => idx !== i)
    setError(null)
    setFiles(next)
    syncInput(next)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) addFiles(e.target.files)
    if (inputRef.current) inputRef.current.value = ''
  }

  const prevent = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    prevent(e)
    if (e.dataTransfer.files?.length) addFiles(e.dataTransfer.files)
  }

  useEffect(() => {
    const formElement = inputRef.current?.form
    if (!formElement) return

    const handleFormCleared = () => {
      setFiles([])
      setError(null)
      if (inputRef.current) inputRef.current.value = ''
    }

    formElement.addEventListener('form-cleared', handleFormCleared)
    return () =>
      formElement.removeEventListener('form-cleared', handleFormCleared)
  }, [])

  useEffect(() => {
    const input = inputRef.current
    const form = input?.form
    if (!form || !input) return

    const onFormData = (ev: Event) => {
      const fd = (ev as any).formData as FormData
      const fieldName = input.name // includes [] if present
      fd.delete(fieldName)
      files.forEach((f) => fd.append(fieldName, f))
    }

    form.addEventListener('formdata', onFormData as EventListener)
    return () =>
      form.removeEventListener('formdata', onFormData as EventListener)
  }, [files])

  const atLimit = files.length >= maxFiles

  return (
    <div
      onClick={() => inputRef.current?.click()}
      onDragOver={prevent}
      onDragEnter={prevent}
      onDrop={handleDrop}
      className={`flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg cursor-pointer hover:border-accent2 hover:bg-accent2/5 transition-colors text-center ${className}`}
      aria-label="File uploader"
      role="button"
      tabIndex={0}
      onKeyDown={(e) =>
        (e.key === 'Enter' || e.key === ' ') && inputRef.current?.click()
      }
    >
      <input
        ref={inputRef}
        id={id ?? name}
        name={`${name}[]`}
        type="file"
        multiple={multiple}
        accept={accept}
        required={required && files.length === 0}
        onChange={handleChange}
        data-label={label}
        className="hidden"
      />

      <p className="text-contrast text-base font-medium">
        <span className="font-semibold">
          {atLimit ? 'File limit reached' : 'Click to upload'}
        </span>
        {!atLimit && ' or drag and drop'}
      </p>
      <p className="text-sm font-medium text-contrast/70 mt-1">
        You can upload up to {maxFiles} {maxFiles === 1 ? 'file' : 'files'}
      </p>
      <p className="text-xs font-medium text-contrast/50 mt-1">
        PDF, DOC, DOCX files accepted
      </p>
      {error && (
        <p className="mt-3 text-sm font-medium text-red-500">{error}</p>
      )}

      {files.length > 0 && (
        <div className="mt-4 w-full text-left">
          <p className="text-sm font-semibold text-accent2">Uploaded Files:</p>
          <ul className="mt-2 space-y-2 text-sm text-contrast">
            {files.map((file, i) => (
              <li
                key={keyOf(file)}
                className="flex items-center justify-between gap-3"
              >
                <span
                  className="truncate font-medium"
                  title={file.name}
                >
                  {file.name}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    removeAt(i)
                  }}
                  className="shrink-0 rounded-md px-2 py-1 outline outline-1 outline-accent2/50 hover:outline-accent2 hover:bg-accent2/10 transition"
                  aria-label={`Remove ${file.name}`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs font-medium text-contrast/60">
            {files.length}/{maxFiles} selected
          </p>
        </div>
      )}
    </div>
  )
}

type FormRadioProps = {
  heading?: string
  name: string
  options: string[]
  required?: boolean
  defaultValue?: string
  label?: string
}

const FormRadioGroup = ({
  heading,
  name,
  options,
  required = false,
  defaultValue,
  label,
}: FormRadioProps) => (
  <fieldset className="space-y-2">
    {heading && (
      <Paragraph color="text-contrast" margin="mb-3">{heading}</Paragraph>
    )}
    <div className="flex flex-col gap-3">
      {options.map((option) => (
        <label
          key={option}
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <input
            type="radio"
            name={name}
            value={option}
            defaultChecked={defaultValue === option}
            required={required}
            data-label={label}
            className="h-5 w-5 appearance-none rounded-full border border-accent2 checked:bg-accent2 checked:border-accent2 focus:outline-none focus:ring-2 focus:ring-accent2 cursor-pointer transition-colors"
          />
          <span className="font-body font-medium text-contrast">{option}</span>
        </label>
      ))}
    </div>
  </fieldset>
)

type FormCheckboxProps = {
  heading?: string
  name: string
  options: string[]
  defaultSelected?: string[]
  label?: string
}

const FormCheckboxGroup = ({
  heading,
  name,
  options,
  defaultSelected = [],
  label,
}: FormCheckboxProps) => (
  <fieldset className="space-y-2">
    {heading && (
      <Paragraph color="text-contrast" margin="mb-3">{heading}</Paragraph>
    )}
    <div className="flex flex-col gap-3">
      {options.map((option) => (
        <label
          key={option}
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <input
            type="checkbox"
            name={`${name}[]`}
            value={option}
            defaultChecked={defaultSelected.includes(option)}
            data-label={label}
            className="h-5 w-5 appearance-none rounded-md border border-accent2 checked:bg-accent2 checked:border-accent2 focus:outline-none focus:ring-2 focus:ring-accent2 cursor-pointer transition-colors"
          />
          <span className="font-body font-medium text-contrast">{option}</span>
        </label>
      ))}
    </div>
  </fieldset>
)

type FormNameProps = {
  name1: string
  name2: string
  placeholder1?: string
  placeholder2?: string
  requiredFirst?: boolean
  requiredSecond?: boolean
  className?: string
  label1?: string
  label2?: string
}

const FormName = ({
  name1,
  name2,
  placeholder1,
  placeholder2,
  requiredFirst,
  requiredSecond,
  className = '',
  label1 = '',
  label2 = '',
}: FormNameProps) => (
  <div className={`flex gap-4 ${className}`}>
    <input
      id={name1}
      name={name1}
      type="text"
      placeholder={placeholder1}
      required={requiredFirst}
      data-label={label1}
      className="w-full rounded-lg bg-body2 p-4 text-contrast font-medium outline outline-2 -outline-offset-1 outline-accent2/25 placeholder:text-contrast/50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-accent2/80 focus:ring-0"
    />
    <input
      id={name2}
      name={name2}
      type="text"
      placeholder={placeholder2}
      required={requiredSecond}
      data-label={label2}
      className="w-full rounded-lg bg-body2 p-4 text-contrast font-medium outline outline-2 -outline-offset-1 outline-accent2/25 placeholder:text-contrast/50 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-accent2/80 focus:ring-0"
    />
  </div>
)

type FormFirstNameProps = {
  name?: string
  placeholder?: string
  required?: boolean
  className?: string
  label?: string
}

const FormFirstName = ({
  name = 'firstName',
  placeholder = 'First Name',
  required = false,
  className = '',
  label = 'First Name',
}: FormFirstNameProps) => (
  <FormInput
    name={name}
    placeholder={placeholder}
    required={required}
    className={className}
    label={label}
  />
)

type FormLastNameProps = {
  name?: string
  placeholder?: string
  required?: boolean
  className?: string
  label?: string
}

const FormLastName = ({
  name = 'lastName',
  placeholder = 'Last Name',
  required = false,
  className = '',
  label = 'Last Name',
}: FormLastNameProps) => (
  <FormInput
    name={name}
    placeholder={placeholder}
    required={required}
    className={className}
    label={label}
  />
)

type FormButtonProps = {
  label: string
  isLoading?: boolean
  submitMessage?: string
}

const FormButton: React.FC<FormButtonProps> = ({
  label,
  isLoading,
  submitMessage = 'Message sent. Thank you.',
}) => {
  return (
    <Button
      className={isLoading ? 'opacity-70 cursor-not-allowed' : ''}
      type="submit"
      data-message={submitMessage}
    >
      <span>{label}</span>
      {isLoading && (
        <Icon
          icon={arrowPathIcon}
          className="ml-2 h-5 w-5 animate-spin text-body"
          aria-hidden="true"
        />
      )}
    </Button>
  )
}

Form.Input = FormInput
Form.TextArea = FormTextArea
Form.File = FormUpload
Form.FormRadioGroup = FormRadioGroup
Form.FormCheckboxGroup = FormCheckboxGroup
Form.FormButton = FormButton
Form.FormName = FormName
Form.FormFirstName = FormFirstName
Form.FormLastName = FormLastName

export {
  Form,
  FormInput,
  FormTextArea,
  FormUpload,
  FormRadioGroup,
  FormCheckboxGroup,
  FormButton,
  FormName,
  FormFirstName,
  FormLastName,
}
