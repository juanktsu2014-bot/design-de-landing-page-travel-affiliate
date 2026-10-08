import { cn } from '@/lib/utils'

export function SectionHeading({
  id,
  eyebrow,
  title,
  accent,
  description,
  live,
  align = 'left',
}: {
  id: string
  eyebrow: string
  title: string
  accent?: string
  description?: string
  live?: boolean
  align?: 'left' | 'center'
}) {
  return (
    <div className={cn(align === 'center' && 'mx-auto flex max-w-2xl flex-col items-center text-center')}>
      <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
        {live && (
          <span className="relative flex size-2" aria-hidden="true">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/50" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
        )}
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-3 text-balance text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-[44px] sm:leading-[1.08]"
      >
        {title}{' '}
        {accent && <span className="font-serif text-[1.1em] font-normal italic text-primary">{accent}</span>}
      </h2>
      {description && (
        <p className="mt-4 max-w-lg text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      )}
    </div>
  )
}
