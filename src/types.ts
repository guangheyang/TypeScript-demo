import { Color, Mark } from "./enums"
// 联合属性
// export type Deck = (NormalCard | Joker)[]

export type Deck = Card[]

// 继承
export interface Card {
    getString(): string
}
export interface NormalCard extends Card{
    color: Color
    mark: Mark
}

export interface Joker extends Card {
    type: 'big' | 'small'
}