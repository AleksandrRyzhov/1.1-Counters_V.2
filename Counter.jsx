import React from 'react';


class Counter extends React.Component {

    state = {
        counter: 0,

    }
    onClickAdd = () => {
        this.setState({
                counter: this.state.counter + 1,
        })
    };

    onClickDown = () => {
        this.setState({
                counter: this.state.counter - 1,

        })
    };
    onClickReset = () => {
        this.setState({
                counter: 0

        })
    };


    render() {
        let {title} = this.props
        return (
            <div>
                <div>
                    {title}
                    {" "}
                    {this.state.counter}
                    {" "}
                    <button onClick={this.onClickDown}>-1</button>
                    {" "}
                    <button onClick={this.onClickAdd}>+1</button>
                    {" "}
                    <button onClick={this.onClickReset}>Reset</button>
                </div>


            </div>

        )
    }
}


export default Counter;
