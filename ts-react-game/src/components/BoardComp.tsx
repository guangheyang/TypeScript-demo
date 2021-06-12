import { ChessType } from "types/enums";
import { ChessComp } from "./ChessComp";
import "../css/BoardComp.css"
interface IProps {
    chesses: ChessType[]
    callback?: (index: number) => void
    isGameOver?: boolean
}
const BoardComp: React.FC<IProps> = function (props: IProps) {
    // const isGameOver = props.isGameOver as boolean
    // 非空断言，在数据后加上！，告诉TS，不用考虑数据为空的情况
    const isGameOver = props.isGameOver!
    const list = props.chesses.map(
        (type, i) => <ChessComp
        key={i}
        type={type}
        callback={() => {
            if (props.callback && !isGameOver) {
                props.callback(i)
            }
        }}
    /> )
    return (
        <div className="board">
            { list }
        </div>
    )
}

// 设置默认值
BoardComp.defaultProps = {
    isGameOver: false
}

export { BoardComp }