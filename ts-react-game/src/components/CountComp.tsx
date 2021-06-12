interface IProps {
    num: number
    onChange?: (n: number) => void
} 
export const CountComp:React.FC<IProps> = function (props) {
    return (
        <div>
            <button onClick={ () => {
                if (props.onChange) {
                    props.onChange(props.num - 1)
                }
            } }>-</button>
            <span>{ props.num }</span>
            <button onClick={ () => {
                if (props.onChange) {
                    props.onChange(props.num + 1)
                }
            } }>+</button>
        </div>
    )
}