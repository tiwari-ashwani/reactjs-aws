import React, { Component } from 'react'
import LifecycleMountingChild from './LifecycleMountingChild'

class LifecycleMounting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Tony Stark'
        }
        console.log('LCM constructor')
    }


    static getDerivedStateFromProps(props, state) {
        console.log('LCM getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LCM componentDidMount')
    }

    render() {
        console.log('LCM Render')
        return (
            <div>
                <div> LCM Render</div>
                <LifecycleMountingChild />
            </div>
        )
    }
}

export default LifecycleMounting
