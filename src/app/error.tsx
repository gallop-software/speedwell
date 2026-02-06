'use client'

import Link from 'next/link'

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <h1 className="text-4xl font-heading font-medium text-contrast mb-4">
        Something Went Wrong
      </h1>
      <p className="text-lg text-contrast/70 mb-8">
        An unexpected error occurred.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full border-2 border-contrast text-contrast px-6 py-2 font-medium hover:bg-contrast hover:text-body transition-colors"
      >
        Return Home
      </Link>
    </div>
  )
}
