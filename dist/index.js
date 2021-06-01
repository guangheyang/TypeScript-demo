Object.defineProperty(exports, "__esModule", { value: true });
const decks_1 = require("./decks");
const deck = new decks_1.Deck();
deck.shuffle();
console.log('洗牌之后');
deck.print();
const result = deck.publish();
console.log('发牌之后');
console.log('=======玩家1=======');
result.player1.print();
console.log('=======玩家2=======');
result.player2.print();
console.log('=======玩家3=======');
result.player3.print();
console.log('=======底牌=======');
result.left.print();
