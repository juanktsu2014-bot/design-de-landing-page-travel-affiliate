export type Flight = {
  id: string
  airline: string
  airlineCode: string
  flightNo: string
  from: string
  fromCity: string
  to: string
  toCity: string
  depart: string
  arrive: string
  duration: string
  stops: number
  stopCity?: string
  price: number
  oldPrice?: number
  provider: string
  cabin: string
  baggage: string
  score: number
  tag?: 'Más barato' | 'Más rápido' | 'Mejor valorado' | 'Recomendado'
  co2: string
}

export const FLIGHTS: Flight[] = [
  {
    id: 'bog-mad-ib6584',
    airline: 'Iberia',
    airlineCode: 'IB',
    flightNo: 'IB 6584',
    from: 'BOG',
    fromCity: 'Bogotá',
    to: 'MAD',
    toCity: 'Madrid',
    depart: '18:35',
    arrive: '11:20',
    duration: '10 h 45 min',
    stops: 0,
    price: 589,
    oldPrice: 866,
    provider: 'Iberia.com',
    cabin: 'Económica',
    baggage: '1 maleta de 23 kg',
    score: 9.1,
    tag: 'Recomendado',
    co2: '-12% CO₂',
  },
  {
    id: 'bog-mad-av010',
    airline: 'Avianca',
    airlineCode: 'AV',
    flightNo: 'AV 010',
    from: 'BOG',
    fromCity: 'Bogotá',
    to: 'MAD',
    toCity: 'Madrid',
    depart: '20:10',
    arrive: '12:40',
    duration: '10 h 30 min',
    stops: 0,
    price: 612,
    provider: 'Avianca',
    cabin: 'Económica',
    baggage: 'Equipaje de mano',
    score: 8.7,
    tag: 'Más rápido',
    co2: 'Promedio',
  },
  {
    id: 'bog-mad-ux192',
    airline: 'Air Europa',
    airlineCode: 'UX',
    flightNo: 'UX 192',
    from: 'BOG',
    fromCity: 'Bogotá',
    to: 'MAD',
    toCity: 'Madrid',
    depart: '15:55',
    arrive: '12:05',
    duration: '13 h 10 min',
    stops: 1,
    stopCity: 'Punta Cana',
    price: 498,
    oldPrice: 640,
    provider: 'Viajes Sol',
    cabin: 'Económica',
    baggage: 'Equipaje de mano',
    score: 7.9,
    tag: 'Más barato',
    co2: '+8% CO₂',
  },
  {
    id: 'bog-mad-lh543',
    airline: 'Lufthansa',
    airlineCode: 'LH',
    flightNo: 'LH 543',
    from: 'BOG',
    fromCity: 'Bogotá',
    to: 'MAD',
    toCity: 'Madrid',
    depart: '17:20',
    arrive: '16:45',
    duration: '16 h 25 min',
    stops: 1,
    stopCity: 'Fráncfort',
    price: 704,
    provider: 'FlyGlobal',
    cabin: 'Económica',
    baggage: '1 maleta de 23 kg',
    score: 8.9,
    tag: 'Mejor valorado',
    co2: 'Promedio',
  },
  {
    id: 'bog-mad-af423',
    airline: 'Air France',
    airlineCode: 'AF',
    flightNo: 'AF 423',
    from: 'BOG',
    fromCity: 'Bogotá',
    to: 'MAD',
    toCity: 'Madrid',
    depart: '21:45',
    arrive: '19:10',
    duration: '15 h 25 min',
    stops: 1,
    stopCity: 'París',
    price: 655,
    provider: 'Air France',
    cabin: 'Económica',
    baggage: '1 maleta de 23 kg',
    score: 8.4,
    co2: '+4% CO₂',
  },
  {
    id: 'bog-mad-cm204',
    airline: 'Copa Airlines',
    airlineCode: 'CM',
    flightNo: 'CM 204',
    from: 'BOG',
    fromCity: 'Bogotá',
    to: 'MAD',
    toCity: 'Madrid',
    depart: '06:40',
    arrive: '07:15',
    duration: '17 h 35 min',
    stops: 1,
    stopCity: 'Panamá',
    price: 529,
    provider: 'Viajes Sol',
    cabin: 'Económica',
    baggage: 'Equipaje de mano',
    score: 8.0,
    co2: '+10% CO₂',
  },
]

export function getFlight(id: string) {
  return FLIGHTS.find((f) => f.id === id) ?? FLIGHTS[0]
}

export const DEALS = [
  {
    id: 'bog-mad-ib6584',
    city: 'Madrid',
    country: 'España',
    from: 'BOG',
    to: 'MAD',
    dates: '12 – 26 nov',
    airline: 'Iberia',
    price: 589,
    discount: '-32%',
    image: '/images/madrid.png',
  },
  {
    id: 'bog-mad-av010',
    city: 'Cancún',
    country: 'México',
    from: 'BOG',
    to: 'CUN',
    dates: '04 – 11 dic',
    airline: 'Avianca',
    price: 249,
    discount: '-25%',
    image: '/images/cancun.png',
  },
  {
    id: 'bog-mad-lh543',
    city: 'Nueva York',
    country: 'Estados Unidos',
    from: 'BOG',
    to: 'JFK',
    dates: '18 – 25 nov',
    airline: 'JetBlue',
    price: 312,
    discount: '-18%',
    image: '/images/new-york.png',
  },
  {
    id: 'bog-mad-af423',
    city: 'París',
    country: 'Francia',
    from: 'BOG',
    to: 'CDG',
    dates: '20 ene – 03 feb',
    airline: 'Air France',
    price: 642,
    discount: '-21%',
    image: '/images/paris.png',
  },
]

export const RECENT_SEARCHES = [
  { id: 's1', from: 'BOG', to: 'MAD', fromCity: 'Bogotá', toCity: 'Madrid', dates: '14 – 28 nov', pax: 2, cabin: 'Económica', best: 589, trend: -6, when: 'Hace 2 h' },
  { id: 's2', from: 'BOG', to: 'CUN', fromCity: 'Bogotá', toCity: 'Cancún', dates: '04 – 11 dic', pax: 2, cabin: 'Económica', best: 249, trend: 3, when: 'Ayer' },
  { id: 's3', from: 'MDE', to: 'MIA', fromCity: 'Medellín', toCity: 'Miami', dates: '20 – 27 dic', pax: 1, cabin: 'Premium', best: 338, trend: -12, when: 'Hace 3 días' },
  { id: 's4', from: 'BOG', to: 'LIM', fromCity: 'Bogotá', toCity: 'Lima', dates: '09 ene', pax: 1, cabin: 'Económica', best: 142, trend: 0, when: 'Hace 5 días' },
  { id: 's5', from: 'BOG', to: 'CDG', fromCity: 'Bogotá', toCity: 'París', dates: '20 ene – 03 feb', pax: 2, cabin: 'Business', best: 2140, trend: -4, when: 'Hace 1 semana' },
]

export const ALERTS = [
  { id: 'a1', from: 'BOG', to: 'MAD', route: 'Bogotá → Madrid', target: 550, current: 589, dates: 'Nov 2026 · ±3 días', active: true, frequency: 'Diaria', change: -6 },
  { id: 'a2', from: 'BOG', to: 'CUN', route: 'Bogotá → Cancún', target: 230, current: 249, dates: 'Dic 2026 · ±7 días', active: true, frequency: 'Instantánea', change: 3 },
  { id: 'a3', from: 'MDE', to: 'MIA', route: 'Medellín → Miami', target: 300, current: 338, dates: '20 – 27 dic', active: false, frequency: 'Semanal', change: -12 },
  { id: 'a4', from: 'BOG', to: 'TYO', route: 'Bogotá → Tokio', target: 1200, current: 1380, dates: 'Abr 2027 · ±7 días', active: true, frequency: 'Diaria', change: -2 },
]

export const PROVIDERS = [
  { name: 'Iberia.com', type: 'Aerolínea', status: 'Activo', clicks: 18420, ctr: 6.8, conv: 4.1, revenue: 12840, latency: 320, uptime: 99.98 },
  { name: 'Viajes Sol', type: 'OTA', status: 'Activo', clicks: 15210, ctr: 7.4, conv: 3.6, revenue: 9620, latency: 410, uptime: 99.91 },
  { name: 'FlyGlobal', type: 'OTA', status: 'Activo', clicks: 11980, ctr: 5.9, conv: 3.2, revenue: 7310, latency: 520, uptime: 99.72 },
  { name: 'Avianca', type: 'Aerolínea', status: 'Activo', clicks: 10340, ctr: 6.1, conv: 3.9, revenue: 6980, latency: 290, uptime: 99.99 },
  { name: 'Air France', type: 'Aerolínea', status: 'Pausado', clicks: 6120, ctr: 4.8, conv: 2.7, revenue: 3410, latency: 610, uptime: 98.4 },
  { name: 'TripNow', type: 'Metabuscador', status: 'En revisión', clicks: 3870, ctr: 3.9, conv: 1.8, revenue: 1290, latency: 880, uptime: 97.1 },
]

export const MONTHS = ['May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct']
export const DAYS_14 = ['26', '27', '28', '29', '30', '1', '2', '3', '4', '5', '6', '7', '8', '9']

export const fmt = (n: number) => new Intl.NumberFormat('es-ES').format(n)
export const usd = (n: number) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
