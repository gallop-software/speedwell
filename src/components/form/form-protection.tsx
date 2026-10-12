'use client'

import Script from 'next/script'

// ============================================================================
// FormProtection Component
// ============================================================================

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

/**
 * Spam protection for a Form: a hidden honeypot field that only bots fill in,
 * and the Cloudflare Turnstile widget when a site key is configured. Both are
 * checked by /api/submit-form. The widget stays out of sight for most visitors.
 */
export function FormProtection() {
  return (
    <>
      <div
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
        aria-hidden="true"
      >
        <label>
          Company website
          <input
            type="text"
            name="companyWebsite"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>
      {siteKey && (
        <>
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            strategy="lazyOnload"
          />
          {/* Hidden unless Cloudflare needs the visitor to do something; when
              it does show, it spans the form like the fields above it */}
          <div
            className="cf-turnstile"
            data-sitekey={siteKey}
            data-theme="auto"
            data-appearance="interaction-only"
            data-size="flexible"
          />
        </>
      )}
    </>
  )
}
