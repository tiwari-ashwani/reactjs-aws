import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    incrementCounter() {
        this.setState({
            count: this.state.count + 1
        },
            () => {
                console.log('SYNC CALL || Callback value of counter is - ' + this.state.count)
            }
        )
        console.log('ASYNC CALL || Value of counter is - ' + this.state.count)
    }

    incrementCounterUsingPrevState() {
        this.setState(prevState => ({
            count: prevState.count +1
        })
        )
        console.log('Count Value is - '+this.state.count)
    }

    incrementCounterByFive() {
        this.incrementCounterUsingPrevState();
        this.incrementCounterUsingPrevState();
        this.incrementCounterUsingPrevState();
        this.incrementCounterUsingPrevState();
        this.incrementCounterUsingPrevState();
    }

    render() {
        return (
            <div>
                <div>Count is - {this.state.count}</div>
                <button onClick={() => this.incrementCounter()}>Increment</button>
                <button onClick={() => this.incrementCounterByFive()}>Increment By Five</button>
            </div>
        )
    }
}

export default Counter
