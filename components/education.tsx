import { education, languages } from '@/lib/cv'

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 pb-16 md:px-10 md:pb-24">
      <div className="grid gap-10 border-t border-border pt-16 md:grid-cols-[220px_1fr]">
        <h2 className="text-lg font-semibold uppercase leading-snug tracking-[0.25em]">Education</h2>
        <div className="flex flex-col gap-10">
          <ul className="flex flex-col">
            {education.map((e) => (
              <li
                key={e.title}
                className="grid gap-1 border-b border-border py-5 first:pt-0 md:grid-cols-[160px_1fr] md:gap-6"
              >
                <span className="text-sm text-primary">{e.period}</span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium">{e.title}</h3>
                  <p className="text-sm text-muted-foreground">{e.school}</p>
                  {e.detail && <p className="text-sm text-muted-foreground">{e.detail}</p>}
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Languages</span>
            {languages.map((l) => (
              <span key={l} className="text-sm">
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
