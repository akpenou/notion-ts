import { Block, RichText } from './block'

export interface Quote {
  rich_text: RichText[]
  color: string
}

export type BlockQuote = Block & {
  type: 'quote'
  quote: Quote
}
