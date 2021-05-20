type Deck = NormalCard[]
enum Color {
    heart = "♥",
    spade = "♠",
    club = "♣",
    diamond = "♦"

}

enum Mark {
    one = "A",
    two = "2",
    three = "3",
    four = "4",
    five = "5",
    six = "6",
    seven = "7",
    eight = "8",
    nine = "9",
    ten = "10",
    eleven = "J",
    twelve = "Q",
    king = "K"
}
type NormalCard = {
    color: Color,
    mark: Mark
}
function createDeck():Deck {
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

function printDeck(deck: Deck) {
    let result = "\n";
    deck.forEach(item => {
        let str = item.color + item.mark
        result += str + "\t"
    })
    console.log(result)
}

const deck = createDeck();
printDeck(deck);