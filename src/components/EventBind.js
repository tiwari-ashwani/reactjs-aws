import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello !!'
        }
        //this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     if (this.state.message == 'Hello !!') {
    //         this.setState({
    //             message: 'GoodBye !!'
    //         })
    //     } else {
    //         this.setState({
    //             message: 'Hello !!'
    //         })
    //     }
    // }

    clickHandler = () => {
        if (this.state.message ==='Hello !!') {
            this.setState({
                message: 'GoodBye !!'
            })
        } else {
            this.setState({
                message: 'Hello !!'
            })
        }
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                
                {/* Approach 1 */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click Event Bind</button> */}

                {/* Approach 2 Binding in the calling fucntion*/}
                {/* <button onClick={() => this.clickHandler()}>Click Event Bind</button> */}
                
                {/* Approach 3 Binding in the constructor */}
                {/* <button onClick={this.clickHandler}>Click Event Bind</button> */}
                
                {/* Approach 4 Calling via the arrow function and removing the const binding*/}
                <button onClick={this.clickHandler}>Click Event Bind</button>

            </div>
        )
    }
}

export default EventBind