Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
const enums_1 = require("./enums");
class Deck {
    constructor(cards) {
        this.cards = [];
        if (!cards) {
            this.init();
        }
        else {
            this.cards = cards;
        }
    }
    init() {
        const mark = Object.values(enums_1.Mark);
        const color = Object.values(enums_1.Color);
        for (const m of mark) {
            for (const c of color) {
                const card = {
                    color: c,
                    mark: m,
                    getString() {
                        return this.color + this.mark;
                    }
                };
                this.cards.push(card);
            }
        }
        let joker = {
            type: 'big',
            getString() {
                return 'joker';
            }
        };
        this.cards.push(joker);
        joker = {
            type: 'small',
            getString() {
                return 'JOKER';
            }
        };
        this.cards.push(joker);
    }
    print() {
        let result = "\n";
        this.cards.forEach((item, i) => {
            result += item.getString() + "\t";
            if ((i + 1) % 6 === 0) {
                result += "\n";
            }
        });
        console.log(result);
    }
    shuffle() {
        const len = this.cards.length;
        for (let i = 0; i < len; i++) {
            const targetIndex = this.getRandom(0, len);
            const temp = this.cards[i];
            this.cards[i] = this.cards[targetIndex];
            this.cards[targetIndex] = temp;
        }
    }
    getRandom(min, max) {
        const dec = max - min;
        return Math.floor(Math.random() * dec + min);
    }
    publish() {
        let player1, player2, player3, left;
        player1 = this.takeCards(17);
        player2 = this.takeCards(17);
        player3 = this.takeCards(17);
        left = new Deck(this.cards);
        return {
            player1, player2, player3, left
        };
    }
    takeCards(n) {
        const cards = [];
        for (let i = 0; i < n; i++) {
            cards.push(this.cards.shift());
        }
        return new Deck(cards);
    }
}
exports.Deck = Deck;
