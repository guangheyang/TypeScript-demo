import { ChessType } from "types/enums";
import '../css/ChessComp.css'
interface IProps {
    type: ChessType
    callback?: () => void
}
export  function ChessComp ({ type, callback }: IProps) {
    let chess = null;
    if (type === ChessType.red) {
        chess = <div className="red chess-item"></div>
    } else if (type === ChessType.black) {
        chess = <div className="black chess-item"></div>
    }
    return (
        <div className="chess" onClick={() => {
            if (type === ChessType.none && callback) {
                callback()
            }
        }}>
            { chess }
        </div>
    )
}