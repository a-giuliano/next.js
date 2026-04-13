export function runtimeBodyMessage(route: string): string {
  return (
    `Route "${route}" can't load instantly.\n\n` +
    `Cause: A request-time API was used without a surrounding ` +
    `<Suspense> boundary. This prevents Next.js from prerendering ` +
    `any part of the page.\n\n` +
    `Common triggers:\n` +
    `  - cookies()\n` +
    `  - headers()\n` +
    `  - await params (in a Page or Layout)\n` +
    `  - await searchParams (in a Page)\n` +
    `  - draftMode()\n\n` +
    `Possible fixes (each has different trade-offs):\n` +
    `  - Wrap the component in <Suspense> (streams just that component)\n` +
    `  - Move the API call into a child component wrapped in <Suspense>\n` +
    `  - Add a loading.js file to the route (streams the whole page)\n\n` +
    `Which fix is right depends on your use case. Learn more:\n` +
    `https://nextjs.org/docs/messages/blocking-route`
  )
}

export function dynamicBodyMessage(route: string): string {
  return (
    `Route "${route}" can't load instantly.\n\n` +
    `Cause: Uncached data or a request-time API was used without a ` +
    `surrounding <Suspense> boundary. This prevents Next.js from ` +
    `prerendering any part of the page.\n\n` +
    `Common triggers:\n` +
    `  - fetch() without "use cache"\n` +
    `  - Database or API calls without "use cache"\n` +
    `  - connection()\n` +
    `  - cookies(), headers()\n` +
    `  - await params, await searchParams\n\n` +
    `Possible fixes (each has different trade-offs):\n` +
    `  - "use cache": cache the data so it can be prerendered\n` +
    `  - <Suspense>: stream just the dynamic component\n` +
    `  - loading.js: stream the whole page with a fallback\n\n` +
    `Which fix is right depends on your use case. Learn more:\n` +
    `https://nextjs.org/docs/messages/blocking-route`
  )
}

export function runtimeMetadataMessage(route: string): string {
  return (
    `Route "${route}" has metadata that blocks loading.\n\n` +
    `Cause: A request-time API was used in generateMetadata() (e.g. ` +
    `cookies(), headers()), but the rest of the page is fully static. ` +
    `This makes metadata the only dynamic part, so the entire page ` +
    `can't be prerendered.\n\n` +
    `Fix: Replace the request-time API with cached data, or add ` +
    `connection() inside <Suspense> in the page body to confirm ` +
    `the page should be dynamic.\n\n` +
    `Learn more: ` +
    `https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`
  )
}

export function dynamicMetadataMessage(route: string): string {
  return (
    `Route "${route}" has metadata that blocks loading.\n\n` +
    `Cause: generateMetadata() depends on uncached data (e.g. an ` +
    `uncached fetch() or connection()), but the rest of the page is ` +
    `fully static. This makes metadata the only dynamic part, so the ` +
    `entire page can't be prerendered.\n\n` +
    `Fix: Cache the data with "use cache", or mark another part of ` +
    `the page as dynamic to confirm this is intentional.\n\n` +
    `Learn more: ` +
    `https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`
  )
}

export function runtimeViewportMessage(route: string): string {
  return (
    `Route "${route}" has viewport config that blocks loading.\n\n` +
    `Cause: A request-time API was used in generateViewport() (e.g. ` +
    `cookies(), headers()), but the rest of the page is fully static. ` +
    `This makes viewport configuration the only dynamic part, so the ` +
    `entire page can't be prerendered.\n\n` +
    `Fix: Replace the request-time API with cached data, or add ` +
    `connection() inside <Suspense> in the page body to confirm ` +
    `the page should be dynamic.\n\n` +
    `Learn more: ` +
    `https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`
  )
}

export function dynamicViewportMessage(route: string): string {
  return (
    `Route "${route}" has viewport config that blocks loading.\n\n` +
    `Cause: generateViewport() depends on uncached data (e.g. an ` +
    `uncached fetch() or connection()), but the rest of the page is ` +
    `fully static. This makes viewport configuration the only dynamic ` +
    `part, so the entire page can't be prerendered.\n\n` +
    `Fix: Cache the data with "use cache", or mark another part of ` +
    `the page as dynamic to confirm this is intentional.\n\n` +
    `Learn more: ` +
    `https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`
  )
}

export function disallowedDynamicViewportMessage(route: string): string {
  return (
    `Route "${route}" has viewport config that blocks loading.\n\n` +
    `Cause: generateViewport() depends on data that can't be resolved ` +
    `at build time, but the rest of the page is fully static. ` +
    `This makes viewport configuration the only dynamic part, so the ` +
    `entire page can't be prerendered.\n\n` +
    `Fix: Cache the data with "use cache", or mark another part of ` +
    `the page as dynamic to confirm this is intentional.\n\n` +
    `Learn more: ` +
    `https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`
  )
}

export function disallowedDynamicMetadataMessage(route: string): string {
  return (
    `Route "${route}" has metadata that blocks loading.\n\n` +
    `Cause: generateMetadata() depends on data that can't be resolved ` +
    `at build time, but the rest of the page is fully static. ` +
    `This makes metadata the only dynamic part, so the entire page ` +
    `can't be prerendered.\n\n` +
    `Fix: Cache the data with "use cache", or mark another part of ` +
    `the page as dynamic to confirm this is intentional.\n\n` +
    `Learn more: ` +
    `https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`
  )
}
