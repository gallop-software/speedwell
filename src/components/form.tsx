'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from './button'
import { Paragraph } from './paragraph'
import clsx from 'clsx'
import arrowPathIcon from '@iconify/icons-heroicons/arrow-path'
import calendarIcon from '@iconify/icons-heroicons/calendar'
import clockIcon from '@iconify/icons-heroicons/clock'
import chevronDownIcon from '@iconify/icons-heroicons/chevron-down'
import chevronLeftIcon from '@iconify/icons-heroicons/chevron-left'
import chevronRightIcon from '@iconify/icons-heroicons/chevron-right'
import { Icon } from './icon'
import React, { Children, isValidElement } from 'react'
import { Dialog, DialogPanel, DialogBackdrop, Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/react'

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

// Calendar utilities
const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

function formatDate(date: Date | null) {
  if (!date) return ''
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
}

function formatDateValue(date: Date | null) {
  if (!date) return ''
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function formatTime(hour: number, minute: number) {
  const period = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour % 12 || 12
  const displayMinute = String(minute).padStart(2, '0')
  return `${displayHour}:${displayMinute} ${period}`
}

function formatTimeValue(hour: number, minute: number) {
  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`
}

// Calendar Component
function Calendar({
  selectedDate,
  onSelect,
  viewDate,
  onViewDateChange,
}: {
  selectedDate: Date | null
  onSelect: (date: Date) => void
  viewDate: Date
  onViewDateChange: (date: Date) => void
}) {
  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()
  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const days: (number | null)[] = []
  for (let i = 0; i < firstDay; i++) days.push(null)
  for (let i = 1; i <= daysInMonth; i++) days.push(i)
  // Pad to always have 42 cells (6 rows × 7 days) for consistent height
  while (days.length < 42) days.push(null)

  const prevMonth = () => {
    onViewDateChange(new Date(year, month - 1, 1))
  }

  const nextMonth = () => {
    onViewDateChange(new Date(year, month + 1, 1))
  }

  const isSelected = (day: number) => {
    if (!selectedDate || !day) return false
    return selectedDate.getFullYear() === year && selectedDate.getMonth() === month && selectedDate.getDate() === day
  }

  const isToday = (day: number) => {
    if (!day) return false
    return today.getFullYear() === year && today.getMonth() === month && today.getDate() === day
  }

  const isPast = (day: number) => {
    if (!day) return false
    const date = new Date(year, month, day)
    return date < today
  }

  return (
    <div className="w-80 lg:w-96">
      <div className="grid grid-cols-7 gap-1 mb-4">
        {DAYS.map((day) => (
          <div key={day} className="text-center text-sm text-contrast/50 font-semibold py-2">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, i) => (
          <button
            key={i}
            type="button"
            disabled={!day || isPast(day)}
            onClick={() => day && onSelect(new Date(year, month, day))}
            className={clsx(
              'w-10 h-10 lg:w-12 lg:h-12 mx-auto flex items-center justify-center text-base rounded-full transition-colors',
              !day && 'invisible',
              day && isPast(day) && 'text-contrast/30 cursor-not-allowed',
              day && !isPast(day) && !isSelected(day) && 'text-contrast hover:bg-contrast/10 cursor-pointer',
              isSelected(day) && 'bg-contrast text-body font-semibold hover:bg-contrast/80 cursor-pointer',
              isToday(day) && !isSelected(day) && 'ring-1 ring-contrast'
            )}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  )
}

// DatePicker Component
function DatePickerInput({
  name,
  placeholder = 'Select date',
  required,
  defaultValue,
  label = '',
  className = '',
}: {
  name: string
  placeholder?: string
  required?: boolean
  defaultValue?: string
  label?: string
  className?: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    defaultValue ? new Date(defaultValue) : null
  )
  const [viewDate, setViewDate] = useState(selectedDate || new Date())
  const [viewDate2, setViewDate2] = useState(() => {
    const d = new Date(viewDate)
    d.setMonth(d.getMonth() + 1)
    return d
  })

  const handleSelect = (date: Date) => {
    setSelectedDate(date)
    setIsOpen(false)
  }

  // Sync second calendar to be month after first
  useEffect(() => {
    const d = new Date(viewDate)
    d.setMonth(d.getMonth() + 1)
    setViewDate2(d)
  }, [viewDate])

  return (
    <>
      <input
        type="hidden"
        name={name}
        value={formatDateValue(selectedDate)}
        data-label={label}
        required={required}
      />
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={clsx(
          'w-full flex items-center gap-3 rounded-lg bg-body2 px-4 py-3 text-contrast font-medium',
          'outline outline-2 -outline-offset-1 outline-accent2/25',
          'hover:outline-accent2/50 transition-colors cursor-pointer',
          className
        )}
      >
        <Icon icon={calendarIcon} className="w-5 h-5 text-contrast/70 shrink-0" />
        <span className={clsx('flex-1 text-left', !selectedDate && 'text-contrast/50')}>
          {selectedDate ? formatDate(selectedDate) : placeholder}
        </span>
        <Icon icon={chevronDownIcon} className="w-5 h-5 text-contrast/50 shrink-0" />
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex items-end lg:items-center justify-center p-0 lg:p-4">
          <DialogPanel className="w-full lg:w-auto bg-body rounded-t-2xl lg:rounded-2xl shadow-xl max-h-[90vh] overflow-auto">
            <div className="p-6 lg:p-8">
              {/* Header with navigation */}
              <div className="flex items-center justify-between mb-6">
                <button
                  type="button"
                  onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))}
                  className="p-2 hover:bg-contrast/5 rounded-full transition-colors cursor-pointer"
                >
                  <Icon icon={chevronLeftIcon} className="w-6 h-6 text-contrast" />
                </button>
                <div className="flex gap-8 lg:gap-32">
                  <div className="flex gap-4 text-lg font-semibold text-contrast">
                    <span>{MONTHS[viewDate.getMonth()]}</span>
                    <span className="text-contrast/50">{viewDate.getFullYear()}</span>
                  </div>
                  <div className="hidden lg:flex gap-4 text-lg font-semibold text-contrast">
                    <span>{MONTHS[viewDate2.getMonth()]}</span>
                    <span className="text-contrast/50">{viewDate2.getFullYear()}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))}
                  className="p-2 hover:bg-contrast/5 rounded-full transition-colors cursor-pointer"
                >
                  <Icon icon={chevronRightIcon} className="w-6 h-6 text-contrast" />
                </button>
              </div>
              {/* Calendars */}
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                <Calendar
                  selectedDate={selectedDate}
                  onSelect={handleSelect}
                  viewDate={viewDate}
                  onViewDateChange={setViewDate}
                />
                <div className="hidden lg:block">
                  <Calendar
                    selectedDate={selectedDate}
                    onSelect={handleSelect}
                    viewDate={viewDate2}
                    onViewDateChange={(d) => {
                      const first = new Date(d)
                      first.setMonth(first.getMonth() - 1)
                      setViewDate(first)
                    }}
                  />
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

// Generate time slots in 10-minute increments
function generateTimeSlots() {
  const slots: { hour: number; minute: number; label: string; value: string }[] = []
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 10) {
      const period = h >= 12 ? 'PM' : 'AM'
      const displayHour = h % 12 || 12
      const displayMinute = String(m).padStart(2, '0')
      slots.push({
        hour: h,
        minute: m,
        label: `${displayHour}:${displayMinute} ${period}`,
        value: `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`,
      })
    }
  }
  return slots
}

const TIME_SLOTS = generateTimeSlots()

// TimePicker Component
function TimePickerInput({
  name,
  placeholder = 'Select time',
  required,
  defaultValue,
  label = '',
  className = '',
}: {
  name: string
  placeholder?: string
  required?: boolean
  defaultValue?: string
  label?: string
  className?: string
}) {
  const [selectedTime, setSelectedTime] = useState<string | null>(defaultValue || null)

  const selectedSlot = TIME_SLOTS.find((s) => s.value === selectedTime)

  return (
    <Listbox value={selectedTime} onChange={setSelectedTime}>
      <div className="relative">
        <input
          type="hidden"
          name={name}
          value={selectedTime || ''}
          data-label={label}
          required={required}
        />
        <ListboxButton
          className={clsx(
            'w-full flex items-center gap-3 rounded-lg bg-body2 px-4 py-3 text-contrast font-medium',
            'outline outline-2 -outline-offset-1 outline-accent2/25',
            'hover:outline-accent2/50 transition-colors cursor-pointer',
            className
          )}
        >
          <Icon icon={clockIcon} className="w-5 h-5 text-contrast/70 shrink-0" />
          <span className={clsx('flex-1 text-left', !selectedTime && 'text-contrast/50')}>
            {selectedSlot ? selectedSlot.label : placeholder}
          </span>
          <Icon icon={chevronDownIcon} className="w-5 h-5 text-contrast/50 shrink-0" />
        </ListboxButton>

        <ListboxOptions className="absolute left-0 right-0 top-full mt-2 z-50 bg-body rounded-xl shadow-xl border border-contrast/10 max-h-60 overflow-y-auto focus:outline-none">
          {TIME_SLOTS.map((slot) => (
            <ListboxOption
              key={slot.value}
              value={slot.value}
              className={({ active, selected }) =>
                clsx(
                  'w-full px-4 py-3 text-left text-base transition-colors cursor-pointer',
                  selected && 'bg-contrast/10 font-semibold text-contrast',
                  active && !selected && 'bg-contrast/5',
                  !active && !selected && 'text-contrast'
                )
              }
            >
              {slot.label}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
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
}: FormInputProps) => {
  // Use custom date picker for date type
  if (type === 'date') {
    return (
      <DatePickerInput
        name={name}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        label={label}
        className={className}
      />
    )
  }

  // Use custom time picker for time type
  if (type === 'time') {
    return (
      <TimePickerInput
        name={name}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        label={label}
        className={className}
      />
    )
  }

  return (
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
}

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
