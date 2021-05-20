type Deck = NormalCard[]
type Color = "♥"|"♠"|"♦"|"♣";
type NormalCard = {
    color: Color,
    mark: number
}
function createDeck():Deck {
    const deck: Deck = []
    for (let i = 1; i < 13; i++) {
        deck.push({mark: i, color: "♠"})
        deck.push({mark: i, color: "♣"})
        deck.push({mark: i, color: "♥"})
        deck.push({mark: i, color: "♦"})
    }
    return deck;
}

function printDeck(deck: Deck) {
    let result = "\n";
    deck.forEach(item => {
        let str = item.color
        if (item.mark <= 10) {
            str += item.mark
        } else if (item.mark === 11) {
            str += 'J'
        } else if (item.mark === 12) {
            str += "Q"
        } else if (item.mark === 13){
            str += "K"
        }
        result += str + "\t"
    })
    console.log(result)
}

const deck = createDeck();
printDeck(deck);