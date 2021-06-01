import { Color, Mark } from "./enums";
import { Card, Joker, NormalCard } from "./types";

interface PublishResult {
    player1: Deck,
    player2: Deck,
    player3: Deck,
    left: Deck
}
export class Deck {
    private cards: Card[] = []

    constructor(cards?:Card[]) {
     if (!cards) {
        this.init()
     } else {
        this.cards = cards
     }
    }
    private init() {
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
                this.cards.push(card)
            }    
        }
        let joker:Joker = {
            type: 'big',
            getString() {
                return 'joker'
            }
        }
        this.cards.push(joker)
        joker = {
            type: 'small',
            getString() {
                return 'JOKER'
            }
        }
        this.cards.push(joker)
    }

    print() {
        let result = "\n";
        this.cards.forEach((item, i) => {
            result += item.getString() + "\t"
            if ((i + 1) % 6 === 0) {
                result += "\n"
            }
        })
        console.log(result)
    }

    // 洗牌
    shuffle() {
        const len = this.cards.length
        for (let i = 0; i < len; i++) {
            const targetIndex = this.getRandom(0, len);
            const temp = this.cards[i]
            this.cards[i] = this.cards[targetIndex]
            this.cards[targetIndex] = temp
        }
    }

    /**
     * 无法取到最大值
     * @param min 最小值
     * @param max 最大值
     */
    private getRandom(min: number, max: number) {
        const dec = max - min;
        return Math.floor(Math.random() * dec + min)
    }

    // 发牌,斗地主，结果有四个card[]
    publish(): PublishResult {
        let player1: Deck, player2: Deck, player3: Deck, left: Deck
        player1 = this.takeCards(17)
        player2 = this.takeCards(17)
        player3 = this.takeCards(17)
        left = new Deck(this.cards)
        return { 
            player1, player2, player3, left
        }
    }

    private takeCards(n: number): Deck {
        const cards: Card[] = []
        for (let i = 0; i < n; i++) {
            cards.push(this.cards.shift() as Card)
        }
        return new Deck(cards)
    }
}