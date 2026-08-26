// See https://opennext.js.org/cloudflare for configuration options.
import { defineCloudflareConfig } from '@opennextjs/cloudflare'
// This template renders static + on-demand routes only (no ISR/revalidate),
// so no incremental cache is required. To enable ISR later, uncomment R2:
// import r2IncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache'

export default defineCloudflareConfig({
  // incrementalCache: r2IncrementalCache,
})
