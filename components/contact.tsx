import type { SVGProps } from 'react'
import { ArrowRight, AtSign, Mail, MapPin, Phone } from 'lucide-react'
import { contact } from '@/lib/cv'

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const items = [
  { icon: Mail, label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: 'Phone', value: contact.phone, href: contact.phoneHref },
  { icon: LinkedinIcon, label: 'LinkedIn', value: contact.linkedin, href: contact.linkedinHref },
  { icon: AtSign, label: 'Social', value: contact.instagram, href: contact.instagramHref },
  { icon: MapPin, label: 'Location', value: 'Rabat — Salé, Morocco' },
]

export function Contact() {
  return (
    <section id="contact" className="bg-card">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[220px_1fr_240px] md:items-center md:px-10 md:py-20">
        <div className="flex flex-col gap-4 md:border-r md:border-border md:pr-8">
          <h2 className="text-lg font-semibold uppercase leading-snug tracking-[0.25em]">
            {"Let's"}
            <br />
            Connect
          </h2>
          <span className="h-0.5 w-8 bg-primary" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Open to opportunities with clubs, federations, and academies.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2">
          {items.map(({ icon: Icon, label, value, href }) => (
            <li key={label} className="flex items-start gap-4">
              <Icon className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="text-[11px] font-semibold uppercase tracking-widest">{label}</span>
                {href ? (
                  <a
                    href={href}
                    className="break-words text-sm text-muted-foreground transition-colors hover:text-primary"
                    {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground">{value}</span>
                )}
              </div>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${contact.email}`}
          className="group flex aspect-[4/3] flex-col justify-between border border-primary p-6 text-sm uppercase leading-loose tracking-[0.25em] transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <span>
            {"Let's build"}
            <br />
            a winning
            <br />
            game plan
          </span>
          <ArrowRight
            className="size-5 self-end text-primary transition-transform group-hover:translate-x-1 group-hover:text-primary-foreground"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  )
}
