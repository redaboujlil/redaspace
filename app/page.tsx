import { Contact } from '@/components/contact'
import { Education } from '@/components/education'
import { Experience } from '@/components/experience'
import { Hero } from '@/components/hero'
import { SiteHeader } from '@/components/site-header'
import { SkillsImpact } from '@/components/skills-impact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Experience />
        <SkillsImpact />
        <Education />
        <Contact />
      </main>
      <footer className="mx-auto flex max-w-6xl justify-between px-6 py-6 text-xs uppercase tracking-widest text-muted-foreground md:px-10">
        <span>© 2026 Reda Boujlil</span>
        <span>Made in Morocco</span>
      </footer>
    </>
  )
}
