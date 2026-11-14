// See https://opennext.js.org/cloudflare for configuration options.
import { defineCloudflareConfig } from '@opennextjs/cloudflare'
import staticAssetsIncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache'

// All content comes from the codebase and only changes with a deploy, so every
// prerendered page and the sitemap are built once and served read-only from
// Workers static assets. Nothing is rendered on the Worker for those routes,
// which also keeps the sitemap's build-time filesystem reads off the Worker
// (Workers have no fs; rendering it there returned 500).
//
// Nothing can be regenerated into a read-only cache, and OpenNext's default
// queue throws on every stale request. No route sets `revalidate`, but if one
// ever does, the queue is a deliberate no-op: pages stay as built until the
// next deploy.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
  queue: {
    name: 'noop',
    send: async () => {},
  },
})
