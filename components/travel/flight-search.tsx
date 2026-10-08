'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  ArrowLeftRight,
  CalendarDays,
  ChevronDown,
  Minus,
  PlaneLanding,
  PlaneTakeoff,
  Plus,
  Search,
  Users,
} from 'lucide-react'
import { cn } from '@/lib/utils'

type TripType = 'roundtrip' | 'oneway'

const TRIP_OPTIONS: { value: TripType; label: string }[] = [
  { value: 'roundtrip', label: 'Ida y vuelta' },
  { value: 'oneway', label: 'Solo ida' },
]

const CABIN_OPTIONS = ['Económica', 'Premium Economy', 'Business', 'Primera']

const FLEX_OPTIONS = [
  { value: 0, label: 'Exactas' },
  { value: 1, label: '± 1 día' },
  { value: 3, label: '± 3 días' },
  { value: 7, label: '± 7 días' },
]

const fieldShell =
  'group relative flex h-full min-h-[68px] flex-col justify-center rounded-2xl border border-border bg-secondary/50 px-4 py-3 transition-all duration-200 hover:border-primary/30 hover:bg-card focus-within:border-primary focus-within:bg-card focus-within:shadow-[0_0_0_4px_oklch(0.52_0.18_256/0.12)]'

const labelClass =
  'flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground transition-colors group-focus-within:text-primary'

const inputClass =
  'mt-1 w-full min-w-0 bg-transparent text-base font-semibold tracking-tight text-foreground outline-none placeholder:font-medium placeholder:text-muted-foreground/60'

export function FlightSearch() {
  const router = useRouter()
  const [tripType, setTripType] = useState<TripType>('roundtrip')
  const [origin, setOrigin] = useState('Bogotá (BOG)')
  const [destination, setDestination] = useState('Madrid (MAD)')
  const [flex, setFlex] = useState(3)
  const [cabin, setCabin] = useState(CABIN_OPTIONS[0])

  const swap = () => {
    setOrigin(destination)
    setDestination(origin)
  }

  return (
    <form
      id="buscar"
      role="search"
      aria-label="Buscar vuelos"
      onSubmit={(e) => {
        e.preventDefault()
        router.push('/vuelos')
      }}
      className="mx-auto max-w-[1120px] scroll-mt-28 rounded-[24px] bg-card p-4 shadow-[0_40px_80px_-30px_rgba(5,15,50,0.7),0_0_0_1px_rgba(255,255,255,0.4)] sm:rounded-[28px] sm:p-6 lg:p-7"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div role="radiogroup" aria-label="Tipo de viaje" className="inline-flex rounded-full bg-secondary p-1">
          {TRIP_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={tripType === opt.value}
              onClick={() => setTripType(opt.value)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                tripType === opt.value ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <label className="relative inline-flex items-center">
          <span className="sr-only">Clase</span>
          <select
            value={cabin}
            onChange={(e) => setCabin(e.target.value)}
            className="cursor-pointer appearance-none rounded-full border border-border bg-card py-2 pl-4 pr-9 text-sm font-semibold text-foreground outline-none transition-colors hover:bg-secondary focus-visible:ring-2 focus-visible:ring-ring"
          >
            {CABIN_OPTIONS.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 size-4 text-muted-foreground" aria-hidden="true" />
        </label>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-12">
        <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 md:col-span-2 lg:col-span-6">
          <div className={fieldShell}>
            <label htmlFor="origin" className={labelClass}>
              <PlaneTakeoff className="size-3.5" aria-hidden="true" />
              Origen
            </label>
            <input
              id="origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="¿Desde dónde?"
              autoComplete="off"
              className={inputClass}
            />
          </div>

          <button
            type="button"
            onClick={swap}
            aria-label="Intercambiar origen y destino"
            className="absolute left-1/2 top-1/2 z-10 flex size-10 -translate-x-1/2 -translate-y-1/2 rotate-90 items-center justify-center rounded-full border-4 border-card bg-accent text-primary shadow-md transition-all duration-300 hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:rotate-0 sm:hover:rotate-180"
          >
            <ArrowLeftRight className="size-4" aria-hidden="true" />
          </button>

          <div className={fieldShell}>
            <label htmlFor="destination" className={cn(labelClass, 'sm:pl-3')}>
              <PlaneLanding className="size-3.5" aria-hidden="true" />
              Destino
            </label>
            <input
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="¿A dónde vas?"
              autoComplete="off"
              className={cn(inputClass, 'sm:pl-3')}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:col-span-1 lg:col-span-4">
          <div className={fieldShell}>
            <label htmlFor="departure" className={labelClass}>
              <CalendarDays className="size-3.5" aria-hidden="true" />
              Ida
            </label>
            <input id="departure" type="date" defaultValue="2026-11-14" className={cn(inputClass, 'text-sm sm:text-[15px]')} />
          </div>
          <div className={cn(fieldShell, tripType === 'oneway' && 'opacity-50')}>
            <label htmlFor="return" className={labelClass}>
              <CalendarDays className="size-3.5" aria-hidden="true" />
              Vuelta
            </label>
            <input
              id="return"
              type="date"
              defaultValue="2026-11-28"
              disabled={tripType === 'oneway'}
              className={cn(inputClass, 'text-sm disabled:cursor-not-allowed sm:text-[15px]')}
            />
          </div>
        </div>

        <div className="md:col-span-1 lg:col-span-2">
          <PassengerPicker />
        </div>
      </div>

      <div className="mt-5 flex flex-col items-stretch justify-between gap-4 border-t border-border/70 pt-5 md:flex-row md:items-center">
        <fieldset className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-3">
          <legend className="sr-only">Fechas flexibles</legend>
          <span aria-hidden="true" className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
            <CalendarDays className="size-4 text-primary" />
            Fechas flexibles
          </span>
          <div className="flex flex-wrap gap-1.5">
            {FLEX_OPTIONS.map((opt) => {
              const selected = flex === opt.value
              return (
                <label
                  key={opt.value}
                  className={cn(
                    'cursor-pointer rounded-full border px-3.5 py-1.5 text-[13px] font-semibold transition-all duration-200 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring',
                    selected
                      ? 'border-primary bg-primary text-primary-foreground shadow-[0_6px_14px_-6px_oklch(0.52_0.18_256)]'
                      : 'border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground',
                  )}
                >
                  <input
                    type="radio"
                    name="flex"
                    value={opt.value}
                    checked={selected}
                    onChange={() => setFlex(opt.value)}
                    className="sr-only"
                  />
                  {opt.label}
                </label>
              )
            })}
          </div>
        </fieldset>

        <button
          type="submit"
          className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-[linear-gradient(135deg,oklch(0.6_0.17_240),oklch(0.46_0.19_262))] px-10 py-4 text-base font-bold tracking-tight text-primary-foreground shadow-[0_14px_30px_-12px_oklch(0.52_0.18_256)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-12px_oklch(0.52_0.18_256)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 active:translate-y-0 md:min-w-[240px]"
        >
          <span
            className="absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)] transition-transform duration-700 group-hover:translate-x-full"
            aria-hidden="true"
          />
          <Search className="size-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
          Buscar vuelos
        </button>
      </div>
    </form>
  )
}

function PassengerPicker() {
  const [open, setOpen] = useState(false)
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onPointer = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const total = adults + children + infants

  return (
    <div ref={ref} className="relative h-full">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        className={cn(fieldShell, 'w-full text-left')}
      >
        <span className={labelClass}>
          <Users className="size-3.5" aria-hidden="true" />
          Pasajeros
        </span>
        <span className="mt-1 flex items-center justify-between text-[15px] font-semibold text-foreground">
          {total} {total === 1 ? 'pasajero' : 'pasajeros'}
          <ChevronDown
            className={cn('size-4 text-muted-foreground transition-transform', open && 'rotate-180')}
            aria-hidden="true"
          />
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Seleccionar pasajeros"
          className="animate-in fade-in zoom-in-95 absolute right-0 z-20 mt-2 w-full min-w-72 rounded-2xl border border-border bg-popover p-4 shadow-[0_24px_50px_-20px_rgba(10,25,60,0.45)]"
        >
          <Counter label="Adultos" hint="12+ años" value={adults} min={1} onChange={setAdults} />
          <div className="my-3 h-px bg-border" />
          <Counter label="Niños" hint="2 a 11 años" value={children} min={0} onChange={setChildren} />
          <div className="my-3 h-px bg-border" />
          <Counter label="Bebés" hint="Menores de 2 años" value={infants} min={0} onChange={setInfants} />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-4 w-full rounded-lg bg-secondary py-2 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-accent"
          >
            Listo
          </button>
        </div>
      )}
    </div>
  )
}

function Counter({
  label,
  hint,
  value,
  min,
  onChange,
}: {
  label: string
  hint: string
  value: number
  min: number
  onChange: (v: number) => void
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground">{hint}</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          aria-label={`Quitar ${label.toLowerCase()}`}
          className="flex size-8 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-40"
        >
          <Minus className="size-3.5" aria-hidden="true" />
        </button>
        <span className="w-4 text-center text-sm font-bold tabular-nums" aria-live="polite">
          {value}
        </span>
        <button
          type="button"
          onClick={() => onChange(Math.min(9, value + 1))}
          disabled={value >= 9}
          aria-label={`Añadir ${label.toLowerCase()}`}
          className="flex size-8 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-40"
        >
          <Plus className="size-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
