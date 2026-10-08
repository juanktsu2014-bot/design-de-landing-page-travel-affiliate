import { SiteHeader } from '@/components/travel/site-header'
import { SiteFooter } from '@/components/travel/site-footer'

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-canvas relative min-h-dvh">
      <SiteHeader />
      <main className="pb-16">{children}</main>
      <SiteFooter />
    </div>
  )
}
