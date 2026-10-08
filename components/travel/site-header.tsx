'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Plane, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { label: 'Inicio', href: '/' },
  { label: 'Vuelos', href: '/vuelos' },
  { label: 'Actividad', href: '/cuenta/historial' },
  { label: 'Alertas', href: '/cuenta/alertas' },
]

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname.startsWith(href)
}

export function Logo({ href = '/', tone = 'dark' }: { href?: string; tone?: 'dark' | 'light' }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label="TRAVEL AFFILIATE, inicio"
    >
      <span className="flex size-9 items-center justify-center rounded-xl bg-[linear-gradient(135deg,oklch(0.6_0.17_236),oklch(0.42_0.18_262))] text-primary-foreground shadow-[0_6px_16px_-6px_oklch(0.52_0.18_256)] transition-transform duration-300 group-hover:-rotate-12">
        <Plane className="size-4.5" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'text-[15px] font-extrabold tracking-tight',
            tone === 'dark' ? 'text-foreground' : 'text-white',
          )}
        >
          TRAVEL
        </span>
        <span
          className={cn(
            'mt-0.5 text-[9.5px] font-bold tracking-[0.32em]',
            tone === 'dark' ? 'text-primary' : 'text-[oklch(0.82_0.09_228)]',
          )}
        >
          AFFILIATE
        </span>
      </span>
    </Link>
  )
}

const authLinkBase =
  'inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4 lg:px-10">
      <div className="glass relative mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-4 rounded-full border border-white/70 px-3 pl-5 shadow-float sm:h-[68px] sm:pl-6">
        <Logo />

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full bg-secondary/80 p-1">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item.href)
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'block rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                      active
                        ? 'bg-card text-foreground shadow-[0_1px_3px_rgba(15,30,70,0.12)]'
                        : 'text-muted-foreground hover:bg-card/60 hover:text-foreground',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <Link
            href="/login"
            className={cn(authLinkBase, 'hidden px-4 py-2.5 text-foreground hover:bg-secondary sm:inline-flex')}
          >
            Iniciar sesión
          </Link>
          <Link
            href="/registro"
            className={cn(
              authLinkBase,
              'hidden bg-foreground px-5 py-2.5 text-background hover:-translate-y-px hover:bg-foreground/90 hover:shadow-[0_8px_20px_-8px_rgba(15,30,70,0.6)] sm:inline-flex',
            )}
          >
            Registrarse
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
          </button>
        </div>

        {open && (
          <nav
            id="mobile-nav"
            aria-label="Principal móvil"
            className="animate-in fade-in slide-in-from-top-2 absolute inset-x-0 top-[calc(100%+8px)] rounded-3xl border border-border bg-card p-3 shadow-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const active = isActive(pathname, item.href)
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'block rounded-2xl px-4 py-3 text-[15px] font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground',
                        active && 'bg-accent text-accent-foreground',
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-border pt-3 sm:hidden">
              <Link href="/login" className={cn(authLinkBase, 'border border-border px-4 py-3 text-foreground hover:bg-secondary')}>
                Iniciar sesión
              </Link>
              <Link href="/registro" className={cn(authLinkBase, 'bg-foreground px-4 py-3 text-background hover:bg-foreground/90')}>
                Registrarse
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
