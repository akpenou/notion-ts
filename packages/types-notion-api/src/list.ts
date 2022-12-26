import { Block, RichText } from './block'

export interface BulletedListItem {
  rich_text: RichText[]
  color: string
  children: Block[]
}

export interface NumberedListItem {
  rich_text: RichText[]
  color: string
  children: Block[]
}

export interface ToDoListItem {
  rich_text: RichText[]
  checked: boolean
  color: string
  children: Block[]
}

export type BlockBulletedListItem = Block & {
  type: 'bulleted_list_item'
  bulleted_list_item: BulletedListItem
}

export type BlockNumberedListItem = Block & {
  type: 'numbered_list_item'
  numbered_list_item: NumberedListItem
}

export type BlockToDoListItem = Block & {
  type: 'to_do'
  to_do: ToDoListItem
}
