import { inputBaseStyles } from './utils'
import { DatePickerInput } from './date-picker'
import { TimePickerInput } from './time-picker'

// ============================================================================
// FormInput Component
// ============================================================================

export type FormInputProps = {
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

export function FormInput({
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
}: FormInputProps) {
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

  // Default text input
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
      className={`${inputBaseStyles} ${className}`}
    />
  )
}
