import { BellRing, MousePointerClick, Search } from 'lucide-react'
import { SectionHeading } from './section-heading'

const STEPS = [
  {
    icon: Search,
    title: 'Busca una vez',
    text: 'Introduce tu ruta y fechas. Consultamos al instante a aerolíneas, agencias y metabuscadores.',
  },
  {
    icon: MousePointerClick,
    title: 'Compara con claridad',
    text: 'Precio total, escalas, equipaje y duración en una sola vista, sin letra pequeña ni cargos ocultos.',
  },
  {
    icon: BellRing,
    title: 'Reserva en el momento justo',
    text: 'Te avisamos cuando el precio baja y te llevamos directo al proveedor para reservar con seguridad.',
  },
]

export function TravelBetter() {
  return (
    <section id="como-funciona" aria-labelledby="better-title" className="px-3 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1320px] gap-10 rounded-[32px] border border-white/80 bg-card/75 p-6 shadow-float backdrop-blur-xl sm:p-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16 lg:p-16">
        <div className="flex flex-col justify-between gap-8">
          <SectionHeading
            id="better-title"
            eyebrow="Cómo funciona"
            title="Viaja mejor con"
            accent="TRAVEL AFFILIATE"
            description="Somos un comparador, no una agencia. Nunca cobramos comisiones al viajero: el precio que ves es el del proveedor."
          />
          <div className="flex items-center gap-4 rounded-2xl bg-secondary/70 p-4">
            <p className="text-3xl font-bold tracking-tight text-primary">27%</p>
            <p className="text-sm leading-snug text-muted-foreground">
              es el ahorro medio de quienes reservan con una alerta de precio activa.
            </p>
          </div>
        </div>

        <ol className="grid gap-4">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="group flex gap-5 rounded-3xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-float sm:p-6"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,oklch(0.95_0.03_235),oklch(0.9_0.05_250))] text-primary transition-colors group-hover:bg-none group-hover:bg-primary group-hover:text-primary-foreground">
                <step.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-bold tracking-[0.14em] text-muted-foreground">PASO 0{i + 1}</p>
                <h3 className="mt-1 text-lg font-semibold tracking-tight text-foreground">{step.title}</h3>
                <p className="mt-1.5 text-pretty text-[15px] leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
