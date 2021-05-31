import { Color, Mark } from "./enums";
import { Deck, Joker, NormalCard } from "./types";

export function createDeck():Deck {
    const deck: Deck = []
    const mark = Object.values(Mark)
    const color = Object.values(Color)
    for (const m of mark) {
        for (const c of color) {
            const card: NormalCard = {
                color: c,
                mark: m,
                getString() {
                    return this.color + this.mark
                }
            }
            deck.push(card)
        }
    }
    let joker:Joker = {
        type: 'big',
        getString() {
            return 'joker'
        }
    }
    deck.push(joker)
    joker = {
        type: 'small',
        getString() {
            return 'JOKER'
        }
    }
    deck.push(joker)
    return deck;
}

export function printDeck(deck: Deck) {
    let result = "\n";
    deck.forEach((item, i) => {
        result += item.getString() + "\t"
        if ((i + 1) % 6 === 0) {
            result += "\n"
        }
    })
    console.log(result)
}