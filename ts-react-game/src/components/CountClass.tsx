import React from "react";

export interface IProps {
    num: number
    onChange?: (n: number) => void
}

interface IState {
    msg :string
    description: string
}
export class CountComp extends React.Component<IProps, IState> {
    state: IState = {
        msg: "",
        description: ""
    }
    render() {
        return (
            <div>
                <button onClick={ () => {
                    if (this.props.onChange) {
                        this.props.onChange(this.props.num - 1)
                    }
                } }>-</button>
                <span>{ this.props.num }</span>
                <button onClick={ () => {
                    if (this.props.onChange) {
                        this.props.onChange(this.props.num + 1)
                    }
                } }>+</button>
            </div>
        )
    }
}