import { CurrentYear } from '@/components/current-year'

export function SiteHeader() {
  return (
    <header className="mx-auto grid max-w-6xl grid-cols-3 items-center px-6 pt-8 md:px-10">
      <p className="text-[10px] font-medium uppercase leading-relaxed tracking-[0.3em] md:text-xs">
        Football & Basketball
        <br />
        Performance Analysis
      </p>
      <a href="/" aria-label="Reda Boujlil, home" className="relative mx-auto block size-10 font-display text-lg">
        <span className="absolute left-0 top-0 leading-none">R</span>
        <span className="absolute bottom-0 right-0 leading-none">B</span>
        <span className="absolute left-1/2 top-1/2 h-px w-10 -translate-x-1/2 -translate-y-1/2 -rotate-[60deg] bg-primary" />
      </a>
      <p className="text-right text-[10px] font-medium uppercase leading-relaxed tracking-[0.3em] md:text-xs">
        Portfolio
        <br />
        <CurrentYear />
      </p>
    </header>
  )
}
