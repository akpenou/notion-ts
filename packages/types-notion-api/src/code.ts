import { Block, RichText } from './block'

export interface Code {
  rich_text: RichText[]
  caption: RichText[]
  language: string
}

export type BlockCode = Block & {
  type: 'code'
  code: Code
}
