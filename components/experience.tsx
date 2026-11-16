import { experiences } from '@/lib/cv'

export function Experience() {
  return (
    <section id="experience" className="bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[220px_1fr] md:px-10 md:py-24">
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold uppercase leading-snug tracking-[0.25em]">
            Professional
            <br />
            Experience
          </h2>
          <p className="max-w-52 text-sm leading-relaxed text-muted-foreground">
            From youth basketball benches to national-level analysis rooms.
          </p>
        </div>

        <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((item, i) => (
            <li key={item.org} className="flex flex-col gap-3">
              <div className="flex items-baseline gap-3 border-b border-border pb-3">
                <span className="font-display text-2xl text-foreground">{String(i + 1).padStart(2, '0')}</span>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]">{item.role}</span>
                  <span className="text-xs text-muted-foreground">{item.period}</span>
                </div>
              </div>
              <span className="-mt-3 h-0.5 w-8 bg-primary" aria-hidden="true" />
              <h3 className="text-pretty font-medium leading-snug">{item.org}</h3>
              <span className="w-fit rounded-sm border border-primary/40 px-2 py-0.5 text-[11px] font-medium uppercase tracking-widest text-primary">
                {item.sport}
              </span>
              <ul className="flex flex-col gap-1.5 text-sm leading-relaxed text-muted-foreground">
                {item.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
