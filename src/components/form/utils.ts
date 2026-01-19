// ============================================================================
// Form Utilities & Constants
// ============================================================================

// Calendar constants
export const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

// ============================================================================
// Date Utilities
// ============================================================================

export function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

export function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

export function formatDate(date: Date | null) {
  if (!date) return ''
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })
}

export function formatDateValue(date: Date | null) {
  if (!date) return ''
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// ============================================================================
// Time Utilities
// ============================================================================

export function formatTime(hour: number, minute: number) {
  const period = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour % 12 || 12
  const displayMinute = String(minute).padStart(2, '0')
  return `${displayHour}:${displayMinute} ${period}`
}

export function formatTimeValue(hour: number, minute: number) {
  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`
}

// Generate time slots in 5-minute increments (filtered by interval prop)
export type TimeSlot = {
  hour: number
  minute: number
  label: string
  value: string
}

function generateTimeSlots(): TimeSlot[] {
  const slots: TimeSlot[] = []
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 5) {
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

export const TIME_SLOTS = generateTimeSlots()

// ============================================================================
// Shared Input Styles
// ============================================================================

export const inputBaseStyles = `
  w-full rounded-lg bg-body2 p-4 text-contrast font-medium 
  outline outline-2 -outline-offset-1 outline-accent2/25 
  placeholder:text-contrast/50 
  focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-accent2/80 focus:ring-0
`

export const triggerButtonStyles = `
  w-full flex items-center gap-3 rounded-lg bg-body2 px-4 py-3 text-contrast font-medium
  outline outline-2 -outline-offset-1 outline-accent2/25
  hover:outline-accent2/50 transition-colors cursor-pointer
`
