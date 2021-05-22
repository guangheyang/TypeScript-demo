import { Color, Mark } from "./enums";
import { Deck } from "./types";

export function createDeck():Deck {
    const deck: Deck = []
    const mark = Object.values(Mark)
    const color = Object.values(Color)
    for (const m of mark) {
        for (const c of color) {
            deck.push({
                color: c,
                mark: m
            })
        }
    }
    return deck;
}

export function printDeck(deck: Deck) {
    let result = "\n";
    deck.forEach(item => {
        let str = item.color + item.mark
        result += str + "\t"
    })
    console.log(result)
}