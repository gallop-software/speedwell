import arrowPathIcon from '@iconify/icons-heroicons/arrow-path'
import { Button } from '../button'
import { Icon } from '../icon'

// ============================================================================
// FormButton Component
// ============================================================================

export type FormButtonProps = {
  label: string
  isLoading?: boolean
  submitMessage?: string
}

export function FormButton({
  label,
  isLoading,
  submitMessage = 'Message sent. Thank you.',
}: FormButtonProps) {
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
