import { Block } from './block'

export interface File {
  type: 'external' | 'internal'
  external?: { url: string }
  internal?: {
    url: string
    expiry_time: string
  }
}

export interface Embed {
  url: string
}

export type BlockImage = Block & {
  type: 'image'
  image: File
}

export type BlockVideo = Block & {
  type: 'video'
  video: File
}

export type BlockFile = Block & {
  type: 'file'
  file: File
}

export type BlockPDF = Block & {
  type: 'pdf'
  pdf: File
}

export type BlockEmbed = Block & {
  type: 'embed'
  embed: Embed
}
