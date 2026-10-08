import { cn } from '@/lib/utils'

function buildPath(values: number[], w: number, h: number, pad = 6) {
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min || 1
  const step = w / (values.length - 1)
  const pts = values.map((v, i) => [i * step, pad + (h - pad * 2) * (1 - (v - min) / range)] as const)
  const line = pts
    .map(([x, y], i) => {
      if (i === 0) return `M${x},${y}`
      const [px, py] = pts[i - 1]
      const cx = (px + x) / 2
      return `C${cx},${py} ${cx},${y} ${x},${y}`
    })
    .join(' ')
  return { line, area: `${line} L${w},${h} L0,${h} Z`, pts }
}

export function AreaChart({
  id,
  data,
  labels,
  height = 220,
  secondary,
  className,
}: {
  id: string
  data: number[]
  labels?: string[]
  height?: number
  secondary?: number[]
  className?: string
}) {
  const w = 600
  const all = secondary ? [...data, ...secondary] : data
  const max = Math.max(...all)
  const min = Math.min(...all) * 0.85
  const norm = (arr: number[]) => arr.map((v) => v - min)
  const scaled = buildPath([...norm(data), 0, max - min].slice(0, data.length), w, height)
  const main = buildPathFixed(norm(data), w, height, max - min)
  const sec = secondary ? buildPathFixed(norm(secondary), w, height, max - min) : null
  void scaled

  return (
    <div className={cn('w-full', className)}>
      <svg viewBox={`0 0 ${w} ${height}`} preserveAspectRatio="none" className="w-full" style={{ height }} aria-hidden="true">
        <defs>
          <linearGradient id={`${id}-fill`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--chart-1)" stopOpacity="0.28" />
            <stop offset="100%" stopColor="var(--chart-1)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((t) => (
          <line key={t} x1="0" x2={w} y1={height * t} y2={height * t} stroke="var(--border)" strokeDasharray="4 6" vectorEffect="non-scaling-stroke" />
        ))}
        <path d={main.area} fill={`url(#${id}-fill)`} />
        {sec && (
          <path d={sec.line} fill="none" stroke="var(--chart-4)" strokeWidth="2" strokeDasharray="5 5" vectorEffect="non-scaling-stroke" />
        )}
        <path d={main.line} fill="none" stroke="var(--chart-1)" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
      </svg>
      {labels && (
        <div className="mt-2 flex justify-between text-[11px] font-medium text-muted-foreground">
          {labels.map((l, i) => (
            <span key={`${l}-${i}`}>{l}</span>
          ))}
        </div>
      )}
    </div>
  )
}

function buildPathFixed(values: number[], w: number, h: number, max: number, pad = 8) {
  const step = w / (values.length - 1)
  const pts = values.map((v, i) => [i * step, pad + (h - pad * 2) * (1 - v / (max || 1))] as const)
  const line = pts
    .map(([x, y], i) => {
      if (i === 0) return `M${x},${y}`
      const [px, py] = pts[i - 1]
      const cx = (px + x) / 2
      return `C${cx},${py} ${cx},${y} ${x},${y}`
    })
    .join(' ')
  return { line, area: `${line} L${w},${h} L0,${h} Z` }
}

export function Sparkline({ data, className, tone = 'primary' }: { data: number[]; className?: string; tone?: 'primary' | 'up' | 'down' }) {
  const { line } = buildPath(data, 100, 32, 3)
  const color = tone === 'down' ? 'oklch(0.6 0.2 25)' : tone === 'up' ? 'oklch(0.62 0.15 160)' : 'var(--chart-1)'
  return (
    <svg viewBox="0 0 100 32" preserveAspectRatio="none" className={cn('h-8 w-24', className)} aria-hidden="true">
      <path d={line} fill="none" stroke={color} strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
    </svg>
  )
}

export function BarChart({
  data,
  height = 200,
  highlightLast = true,
  format = (v: number) => String(v),
}: {
  data: { label: string; value: number }[]
  height?: number
  highlightLast?: boolean
  format?: (v: number) => string
}) {
  const max = Math.max(...data.map((d) => d.value))
  return (
    <div className="flex w-full items-end gap-1.5 sm:gap-2.5" style={{ height }}>
      {data.map((d, i) => {
        const hl = highlightLast && i === data.length - 1
        return (
          <div key={`${d.label}-${i}`} className="group flex h-full flex-1 flex-col items-center justify-end gap-2">
            <div className="relative flex w-full flex-1 items-end">
              <div
                className={cn(
                  'relative w-full rounded-t-lg transition-all duration-300 group-hover:opacity-100',
                  hl ? 'bg-[linear-gradient(180deg,var(--chart-2),var(--chart-1))]' : 'bg-accent group-hover:bg-chart-4',
                )}
                style={{ height: `${(d.value / max) * 100}%` }}
              >
                <span className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-1.5 py-0.5 text-[10px] font-semibold text-background opacity-0 transition-opacity group-hover:opacity-100">
                  {format(d.value)}
                </span>
              </div>
            </div>
            <span className="text-[10px] font-medium text-muted-foreground sm:text-[11px]">{d.label}</span>
          </div>
        )
      })}
    </div>
  )
}

export function Donut({
  segments,
  size = 160,
  label,
  sublabel,
}: {
  segments: { label: string; value: number; color: string }[]
  size?: number
  label?: string
  sublabel?: string
}) {
  const total = segments.reduce((a, s) => a + s.value, 0)
  const r = 42
  const c = 2 * Math.PI * r
  let offset = 0
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="size-full -rotate-90" aria-hidden="true">
        <circle cx="50" cy="50" r={r} fill="none" stroke="var(--secondary)" strokeWidth="11" />
        {segments.map((s) => {
          const len = (s.value / total) * c
          const el = (
            <circle
              key={s.label}
              cx="50"
              cy="50"
              r={r}
              fill="none"
              stroke={s.color}
              strokeWidth="11"
              strokeDasharray={`${Math.max(len - 1.5, 0)} ${c}`}
              strokeDashoffset={-offset}
              strokeLinecap="round"
            />
          )
          offset += len
          return el
        })}
      </svg>
      {label && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-xl font-bold tracking-tight text-foreground">{label}</span>
          {sublabel && <span className="text-[11px] text-muted-foreground">{sublabel}</span>}
        </div>
      )}
    </div>
  )
}

export function Progress({ value, className, tone = 'primary' }: { value: number; className?: string; tone?: 'primary' | 'success' | 'warning' | 'danger' }) {
  const tones = {
    primary: 'bg-[linear-gradient(90deg,var(--chart-2),var(--chart-1))]',
    success: 'bg-[oklch(0.62_0.15_160)]',
    warning: 'bg-[oklch(0.75_0.15_75)]',
    danger: 'bg-[oklch(0.6_0.2_25)]',
  }
  return (
    <div className={cn('h-2 w-full overflow-hidden rounded-full bg-secondary', className)} role="presentation">
      <div className={cn('h-full rounded-full', tones[tone])} style={{ width: `${Math.min(100, value)}%` }} />
    </div>
  )
}
