Object.defineProperty(exports, "__esModule", { value: true });
exports.printDeck = exports.createDeck = void 0;
const enums_1 = require("./enums");
function createDeck() {
    const deck = [];
    const mark = Object.values(enums_1.Mark);
    const color = Object.values(enums_1.Color);
    for (const m of mark) {
        for (const c of color) {
            deck.push({
                color: c,
                mark: m
            });
        }
    }
    return deck;
}
exports.createDeck = createDeck;
function printDeck(deck) {
    let result = "\n";
    deck.forEach(item => {
        let str = item.color + item.mark;
        result += str + "\t";
    });
    console.log(result);
}
exports.printDeck = printDeck;
