import { CardDetails } from './cardDetails'

export type CardList = {
  description?: string
  filters?: string[]
  cards: CardDetails[]
}