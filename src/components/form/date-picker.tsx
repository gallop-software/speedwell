'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import calendarIcon from '@iconify/icons-heroicons/calendar'
import chevronDownIcon from '@iconify/icons-heroicons/chevron-down'
import chevronLeftIcon from '@iconify/icons-heroicons/chevron-left'
import chevronRightIcon from '@iconify/icons-heroicons/chevron-right'
import { Icon } from '../icon'
import { Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react'
import {
  DAYS,
  MONTHS,
  getDaysInMonth,
  getFirstDayOfMonth,
  formatDate,
  formatDateValue,
  triggerButtonStyles,
} from './utils'

// ============================================================================
// Calendar Grid Component
// ============================================================================

type CalendarProps = {
  selectedDate: Date | null
  onSelect: (date: Date) => void
  viewDate: Date
  onViewDateChange: (date: Date) => void
}

function Calendar({ selectedDate, onSelect, viewDate, onViewDateChange }: CalendarProps) {
  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()
  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // Build days array with padding for consistent 6-row height
  const days: (number | null)[] = []
  for (let i = 0; i < firstDay; i++) days.push(null)
  for (let i = 1; i <= daysInMonth; i++) days.push(i)
  while (days.length < 42) days.push(null) // Pad to 6 rows × 7 days

  const isSelected = (day: number) => {
    if (!selectedDate || !day) return false
    return (
      selectedDate.getFullYear() === year &&
      selectedDate.getMonth() === month &&
      selectedDate.getDate() === day
    )
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
      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1 mb-4">
        {DAYS.map((day) => (
          <div key={day} className="text-center text-sm text-contrast/50 font-semibold py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Day buttons */}
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
              day && isSelected(day) && 'bg-contrast text-body font-semibold hover:bg-contrast/80 cursor-pointer',
              day && isToday(day) && !isSelected(day) && 'ring-1 ring-contrast'
            )}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  )
}

// ============================================================================
// DatePicker Input Component
// ============================================================================

type DatePickerProps = {
  name: string
  placeholder?: string
  required?: boolean
  defaultValue?: string
  label?: string
  className?: string
  /** Disable navigating to months before the current month */
  disablePastMonths?: boolean
}

export function DatePickerInput({
  name,
  placeholder = 'Select date',
  required,
  defaultValue,
  label = '',
  className = '',
  disablePastMonths = true,
}: DatePickerProps) {
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

      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={clsx(triggerButtonStyles, className)}
      >
        <Icon icon={calendarIcon} className="w-5 h-5 text-contrast/70 shrink-0" />
        <span className={clsx('flex-1 text-left', !selectedDate && 'text-contrast/50')}>
          {selectedDate ? formatDate(selectedDate) : placeholder}
        </span>
        <Icon icon={chevronDownIcon} className="w-5 h-5 text-contrast/50 shrink-0" />
      </button>

      {/* Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex items-end lg:items-center justify-center p-0 lg:p-4">
          <DialogPanel className="w-full lg:w-auto bg-body rounded-t-2xl lg:rounded-2xl shadow-xl max-h-[90vh] overflow-auto">
            <div className="p-6 lg:p-8">
              {/* Header with navigation */}
              <div className="flex items-center justify-between mb-6">
                {(() => {
                  const today = new Date()
                  const isCurrentMonth = viewDate.getFullYear() === today.getFullYear() && viewDate.getMonth() === today.getMonth()
                  const disabled = disablePastMonths && isCurrentMonth

                  return (
                    <button
                      type="button"
                      disabled={disabled}
                      onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))}
                      className={clsx(
                        'p-2 rounded-full transition-colors',
                        disabled ? 'opacity-30 cursor-not-allowed' : 'hover:bg-contrast/5 cursor-pointer'
                      )}
                    >
                      <Icon icon={chevronLeftIcon} className="w-6 h-6 text-contrast" />
                    </button>
                  )
                })()}
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
