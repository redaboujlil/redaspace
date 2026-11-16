import Image from 'next/image'

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-end gap-12 px-6 pt-10 md:grid-cols-[1.25fr_1fr] md:px-10 md:pt-16">
      <div className="flex flex-col gap-6 pb-12 md:pb-20">
        <h1 className="rise font-display text-[22vw] uppercase leading-none tracking-tight text-foreground md:text-[9.5rem] lg:text-[12.5rem]">
          Reda
          <br />
          Boujlil
        </h1>
        <p
          className="rise text-xs font-medium uppercase tracking-[0.3em] text-primary md:text-sm"
          style={{ animationDelay: '150ms' }}
        >
          Video & Performance Analyst
        </p>
        <p
          className="rise max-w-md text-pretty leading-relaxed text-muted-foreground"
          style={{ animationDelay: '250ms' }}
        >
          I turn match footage and data into clear tactical insight helping coaches prepare, players develop, and
          youth talent reach the next level in Moroccan football and basketball.
        </p>
        <span className="rise mt-6 h-0.5 w-16 bg-primary" style={{ animationDelay: '350ms' }} aria-hidden="true" />
      </div>

      <div className="rise relative mx-auto aspect-[4/5] w-full max-w-md" style={{ animationDelay: '200ms' }}>
        <div className="absolute right-0 top-[8%] aspect-square w-[82%] rounded-full bg-primary" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 h-[92%] w-[80%] overflow-hidden rounded-t-full">
          <Image
            src="/images/reda.jpeg"
            alt="Portrait of Reda Boujlil with arms crossed"
            fill
            priority
            sizes="(min-width: 768px) 360px, 80vw"
            className="object-cover object-top grayscale"
          />
        </div>
      </div>
    </section>
  )
}
