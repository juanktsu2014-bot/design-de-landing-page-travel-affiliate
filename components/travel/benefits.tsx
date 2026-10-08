import { BadgeDollarSign, Globe, Leaf, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import { SectionHeading } from './section-heading'

const BENEFITS = [
  { icon: BadgeDollarSign, title: 'Sin comisiones ocultas', text: 'El precio final que ves es el que pagas al proveedor.' },
  { icon: Zap, title: 'Resultados en segundos', text: 'Consultas paralelas a más de 60 proveedores en tiempo real.' },
  { icon: ShieldCheck, title: 'Proveedores verificados', text: 'Solo trabajamos con aerolíneas y agencias acreditadas.' },
  { icon: Sparkles, title: 'Recomendación inteligente', text: 'Equilibramos precio, duración y escalas para sugerirte lo mejor.' },
  { icon: Globe, title: 'Cobertura internacional', text: 'Más de 450 aerolíneas y miles de rutas en todo el mundo.' },
  { icon: Leaf, title: 'Impacto visible', text: 'Compara emisiones estimadas de CO₂ entre opciones de vuelo.' },
]

export function Benefits() {
  return (
    <section aria-labelledby="benefits-title" className="px-4 py-16 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-[1240px]">
        <SectionHeading
          id="benefits-title"
          eyebrow="Beneficios"
          title="Todo lo que necesitas para"
          accent="volar mejor"
          align="center"
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {BENEFITS.map((b) => (
            <li
              key={b.title}
              className="group rounded-3xl border border-white/80 bg-card/80 p-6 shadow-float backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-card"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary transition-transform duration-300 group-hover:scale-110">
                <b.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-base font-semibold tracking-tight text-foreground">{b.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
