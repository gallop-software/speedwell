'use client'

import { useEffect } from 'react'

const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID
const GOOGLE_ADS_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_LABEL

// Define the global reportConversion function (no need to pass sendTo manually)
function reportConversion(value = 1.0, currency = 'USD') {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    console.warn('gtag not found, conversion not sent')
    return
  }

  if (!GOOGLE_ADS_ID || !GOOGLE_ADS_LABEL) {
    console.error('Google Ads ID or Label is not defined in env')
    return
  }

  const sendTo = `${GOOGLE_ADS_ID}/${GOOGLE_ADS_LABEL}`

  window.gtag('event', 'conversion', {
    send_to: sendTo,
    value: value,
    currency: currency,
  })
}

/**
 * GlobalScripts component attaches global reportConversion to window
 */
export function GlobalScripts() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.reportConversion = reportConversion
      // console.log('Global reportConversion attached to window')
    }
  }, [])

  return null
}
