import React from "react";
import { BoardComp } from "components/BoardComp";
import { ChessType } from "types/enums";
interface Istate {
  num: number
}
const types: ChessType[] = [
  ChessType.black,
  ChessType.red,
  ChessType.none,
  ChessType.black,
  ChessType.red,
  ChessType.none,
  ChessType.none,
  ChessType.none,
  ChessType.none
]
export class App extends React.Component<{}, Istate> {
  render() {
    return (
      <div>
        <BoardComp
        isGameOver={false}
        chesses={types}
        callback={i => {
          console.log(i)
        }} />
      </div>
    )
  }
}

// function App() {
//   return (
//     <div>
//       <CountComp num={2} onChange={ (n) => {
//         console.log(n)
        
//       } }></CountComp>
//     </div>
//   );
// }

export default App;
