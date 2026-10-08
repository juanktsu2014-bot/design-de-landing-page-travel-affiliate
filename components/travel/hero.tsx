import { ShieldCheck } from 'lucide-react'
import { FlightSearch } from './flight-search'

const PROVIDER_STATS = [
  { value: '+450', label: 'aerolíneas comparadas' },
  { value: '+60', label: 'proveedores verificados' },
  { value: '24/7', label: 'precios actualizados' },
]

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="px-3 pt-6 sm:px-6 sm:pt-8 lg:px-10">
      <div className="bg-hero-panel shadow-deep relative isolate mx-auto max-w-[1320px] overflow-hidden rounded-[28px] sm:rounded-[36px]">
        <div className="bg-grid-faint absolute inset-0 -z-10" aria-hidden="true" />
        <div
          className="absolute -right-24 -top-24 -z-10 size-[420px] rounded-full bg-[oklch(0.78_0.12_215/0.45)] blur-[100px]"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-40 -left-20 -z-10 size-[460px] rounded-full bg-[oklch(0.5_0.22_272/0.5)] blur-[110px]"
          aria-hidden="true"
        />

        <div className="px-4 pb-8 pt-12 sm:px-8 sm:pb-12 sm:pt-16 lg:px-14 lg:pb-14 lg:pt-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white backdrop-blur-md">
              <ShieldCheck className="size-3.5" aria-hidden="true" />
              Comparador independiente de vuelos
            </span>
            <h1
              id="hero-title"
              className="mt-6 text-balance text-[36px] font-semibold leading-[1.04] tracking-[-0.035em] text-white sm:text-5xl lg:text-[68px]"
            >
              El cielo entero,{' '}
              <span className="font-serif text-[1.1em] font-normal italic tracking-[-0.01em] text-[oklch(0.88_0.08_220)]">
                al mejor precio
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-white/75 sm:text-lg">
              Comparamos en segundos cientos de aerolíneas y agencias para que reserves tu vuelo directamente con el
              proveedor que más te conviene.
            </p>
          </div>

          <div className="mt-10 sm:mt-12">
            <FlightSearch />
          </div>

          <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-3 divide-x divide-white/15">
            {PROVIDER_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 px-2 text-center">
                <dt className="order-2 text-xs text-white/65 sm:text-sm">{stat.label}</dt>
                <dd className="order-1 text-xl font-bold tracking-tight text-white sm:text-2xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
