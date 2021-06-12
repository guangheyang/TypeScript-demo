import React from "react";
import { CountComp } from './components/CountComp'

interface Istate {
  num: number
}

export class App extends React.Component<{}, Istate> {
  state = {
    num: 0
  }
  render() {
    return (
      <CountComp num={this.state.num} onChange={ (n => {
        this.setState({
          num: n
        })
      }) } />
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
