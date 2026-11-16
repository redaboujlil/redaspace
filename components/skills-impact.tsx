import { Quote } from 'lucide-react'
import { skills, software } from '@/lib/cv'

const stats = [
  { value: '5+', label: 'Years in the game' },
  { value: '5', label: 'Clubs & institutions' },
  { value: 'U13–U21', label: 'Youth categories' },
]

export function SkillsImpact() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <div className="grid gap-14 md:grid-cols-2 md:gap-0 md:divide-x md:divide-border">
        <div className="flex flex-col gap-8 md:pr-12">
          <h2 className="text-lg font-semibold uppercase tracking-[0.25em]">Skills & Toolkit</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {skills.map((s) => (
              <li key={s} className="flex items-center gap-3 border-b border-border pb-3 text-sm">
                <span className="size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Software</h3>
            <ul className="flex flex-wrap gap-2">
              {software.map((s) => (
                <li key={s} className="rounded-sm border border-foreground/20 px-3 py-1.5 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:pl-12">
          <h2 className="text-lg font-semibold uppercase tracking-[0.25em]">Impact & Achievements</h2>
          <dl className="grid grid-cols-3 divide-x divide-border">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-2 px-3 first:pl-0">
                <dd className="font-display text-3xl md:text-4xl">{s.value}</dd>
                <dt className="text-[11px] uppercase leading-snug tracking-widest text-muted-foreground">{s.label}</dt>
              </div>
            ))}
          </dl>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex justify-between gap-4 border-b border-border pb-3">
              <span>Moroccan Championship winners</span>
              <span className="text-muted-foreground">FUS</span>
            </li>
            <li className="flex justify-between gap-4 border-b border-border pb-3">
              <span>Throne Cup winners (Women)</span>
              <span className="text-muted-foreground">IRT</span>
            </li>
            <li className="flex justify-between gap-4 border-b border-border pb-3">
              <span>BAL quarter-finalists</span>
              <span className="text-muted-foreground">FUS</span>
            </li>
          </ul>
          <figure className="flex gap-4 border border-border p-6">
            <Quote className="size-7 shrink-0 fill-primary text-primary" aria-hidden="true" />
            <div className="flex flex-col gap-3">
              <blockquote className="text-pretty text-sm leading-relaxed">
                Football is simple, but the hardest thing is to play simple football.
              </blockquote>
              <figcaption className="text-[11px] font-medium uppercase tracking-widest text-primary">
                Johan Cruyff
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
