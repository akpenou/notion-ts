import { Block, RichText } from './block'

export interface Bookmark {
  url: string
  caption: RichText[]
}

export type BlockBookmark = Block & {
  type: 'bookmark'
  bookmark: Bookmark
}
