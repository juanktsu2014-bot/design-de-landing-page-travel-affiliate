import Link from 'next/link'
import { Logo } from './site-header'

const COLUMNS = [
  {
    title: 'Producto',
    links: [
      { label: 'Buscar vuelos', href: '/vuelos' },
      { label: 'Alertas de precio', href: '/cuenta/alertas' },
      { label: 'Oportunidades del día', href: '/#oportunidades' },
    ],
  },
  {
    title: 'Tu cuenta',
    links: [
      { label: 'Iniciar sesión', href: '/login' },
      { label: 'Crear cuenta', href: '/registro' },
      { label: 'Mi panel', href: '/cuenta' },
    ],
  },
  {
    title: 'Compañía',
    links: [
      { label: 'Cómo funciona', href: '/#como-funciona' },
      { label: 'Privacidad', href: '#' },
      { label: 'Términos', href: '#' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="px-3 pb-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1320px] rounded-[28px] border border-white/70 bg-card/70 px-6 py-10 backdrop-blur sm:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Comparador independiente de vuelos. Te mostramos las mejores tarifas y reservas directamente con el
              proveedor.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-foreground">{col.title}</p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <p className="mt-10 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
          © 2026 TRAVEL AFFILIATE. Los precios son orientativos y pueden variar según el proveedor en el momento de la
          reserva.
        </p>
      </div>
    </footer>
  )
}
