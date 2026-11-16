'use client'

// The page is statically prerendered, so the year is computed in the browser
// to stay current without needing a redeploy each January.
export function CurrentYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>
}
