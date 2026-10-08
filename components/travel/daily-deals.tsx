import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Plane } from 'lucide-react'
import { DEALS, usd } from '@/lib/data'
import { SectionHeading } from './section-heading'

export function DailyDeals() {
  return (
    <section id="oportunidades" aria-labelledby="deals-title" className="px-4 py-16 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="deals-title"
            eyebrow="Actualizado hoy"
            live
            title="Oportunidades"
            accent="del día"
            description="Tarifas destacadas encontradas por nuestro comparador en las últimas horas."
          />
          <Link
            href="/vuelos"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow-float transition-all duration-200 hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:self-auto"
          >
            Ver todas las ofertas
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {DEALS.map((deal) => (
            <li key={deal.to}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-white/80 bg-card shadow-float transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-28px_rgba(20,50,110,0.5)] has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-ring">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={deal.image}
                    alt={`Vista de ${deal.city}, ${deal.country}`}
                    fill
                    sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(8,20,50,0.6))]" aria-hidden="true" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-primary backdrop-blur">
                    {deal.discount}
                  </span>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-xs font-bold tracking-wider text-white">
                    {deal.from}
                    <span className="h-px flex-1 bg-white/50" aria-hidden="true" />
                    <Plane className="size-3.5" aria-hidden="true" />
                    <span className="h-px flex-1 bg-white/50" aria-hidden="true" />
                    {deal.to}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">{deal.city}</h3>
                      <p className="text-sm text-muted-foreground">{deal.country}</p>
                    </div>
                    <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold text-secondary-foreground">
                      {deal.airline}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{deal.dates} · Ida y vuelta</p>
                  <div className="mt-auto flex items-end justify-between pt-5">
                    <p>
                      <span className="block text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Desde</span>
                      <span className="text-2xl font-bold tracking-tight text-foreground">{usd(deal.price)}</span>
                    </p>
                    <Link
                      href={`/vuelos/${deal.id}`}
                      className="flex size-10 items-center justify-center rounded-full bg-accent text-primary transition-all duration-300 after:absolute after:inset-0 group-hover:bg-primary group-hover:text-primary-foreground focus-visible:outline-none"
                    >
                      <ArrowUpRight className="size-4.5 transition-transform duration-300 group-hover:rotate-45" aria-hidden="true" />
                      <span className="sr-only">Ver oferta a {deal.city}</span>
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
