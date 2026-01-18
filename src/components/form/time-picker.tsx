'use client'

import { useState } from 'react'
import clsx from 'clsx'
import clockIcon from '@iconify/icons-heroicons/clock'
import chevronDownIcon from '@iconify/icons-heroicons/chevron-down'
import { Icon } from '../icon'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/react'
import { TIME_SLOTS, triggerButtonStyles } from './utils'

// ============================================================================
// TimePicker Input Component
// ============================================================================

type TimePickerProps = {
  name: string
  placeholder?: string
  required?: boolean
  defaultValue?: string
  label?: string
  className?: string
}

export function TimePickerInput({
  name,
  placeholder = 'Select time',
  required,
  defaultValue,
  label = '',
  className = '',
}: TimePickerProps) {
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

        {/* Trigger button */}
        <ListboxButton className={clsx(triggerButtonStyles, className)}>
          <Icon icon={clockIcon} className="w-5 h-5 text-contrast/70 shrink-0" />
          <span className={clsx('flex-1 text-left', !selectedTime && 'text-contrast/50')}>
            {selectedSlot ? selectedSlot.label : placeholder}
          </span>
          <Icon icon={chevronDownIcon} className="w-5 h-5 text-contrast/50 shrink-0" />
        </ListboxButton>

        {/* Dropdown options */}
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
