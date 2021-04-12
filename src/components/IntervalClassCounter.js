import React, { Component } from 'react'

class IntervalClassCounter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log('in CDM')
        this.interval = setInterval(this.tick, 500)
    }

    componentWillUnmount() {
        console.log('in CWUM')
        clearInterval(this.interval)
    }

    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }


    render() {
        return (
            <div>
                <h1>Class Counter :: {this.state.count}</h1>
            </div>
        )
    }
}

export default IntervalClassCounter
