import Link from 'next/link'
import { ArrowRight, BellPlus } from 'lucide-react'

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="px-3 sm:px-6 lg:px-10">
      <div className="bg-hero-panel shadow-deep relative isolate mx-auto max-w-[1320px] overflow-hidden rounded-[32px] px-6 py-14 text-center sm:px-12 sm:py-20">
        <div className="bg-grid-faint absolute inset-0 -z-10" aria-hidden="true" />
        <div className="absolute left-1/2 top-0 -z-10 size-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.75_0.13_220/0.45)] blur-[110px]" aria-hidden="true" />
        <h2 id="cta-title" className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
          Tu próximo destino está{' '}
          <span className="font-serif font-normal italic text-[oklch(0.88_0.08_220)]">a un clic</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-pretty text-white/75 sm:text-lg">
          Crea tu cuenta gratuita para guardar ofertas, activar alertas y seguir la evolución de los precios.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/registro"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-foreground shadow-lg transition-all hover:-translate-y-0.5"
          >
            Crear cuenta gratis
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <Link
            href="/cuenta/alertas/nueva"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            <BellPlus className="size-4" aria-hidden="true" />
            Crear una alerta
          </Link>
        </div>
      </div>
    </section>
  )
}
