import { Hero } from '@/components/travel/hero'
import { DailyDeals } from '@/components/travel/daily-deals'
import { TravelBetter } from '@/components/travel/travel-better'
import { Benefits } from '@/components/travel/benefits'
import { FinalCta } from '@/components/travel/final-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <DailyDeals />
      <TravelBetter />
      <Benefits />
      <FinalCta />
    </>
  )
}
