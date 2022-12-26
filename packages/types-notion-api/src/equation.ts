import { Block, RichText } from './block'

export interface Equation {
  expression: string
}

export type BlockEquation = Block & {
  type: 'equation'
  equation: Equation
}
