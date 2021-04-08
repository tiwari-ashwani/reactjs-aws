import React, { Component, PureComponent } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Ashwani there !!'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Ashwani here !!'
            })
        }, 2000)
    }

    render() {
        return (
            <div>
                This is Parent Regular Component
                <MemoComp name ={this.state.name} />
                {/* <RegularComp name={this.state.name} /> */}
                {/* <PureComp name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp
