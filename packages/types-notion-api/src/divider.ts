import { Block } from './block'

export type BlockDivider = Block & {
  type: 'divider'
  divider: object
}
