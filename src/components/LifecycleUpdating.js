import React, { Component } from 'react'
import LifecycleUpdatingChild from './LifecycleUpdatingChild'

class LifecycleUpdating extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Tony Stark'
        }
        console.log('LCU constructor')
    }




    static getDerivedStateFromProps(props, state) {
        console.log('LCUC getDerivedStateFromProps')
        return null
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LCU getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LCU componentDidUpdate')
    }

    shouldComponentUpdate(){
        console.log('LCU shouldComponentUpdate')
        return true
    }

    onChangeState = () => {
        this.setState({
            name: 'Ashwani did this !!'
        })
    }

    render() {
        console.log('LCU Render')
        return (
            <div>
                <div> LCU Render</div>
                <button onClick={this.onChangeState}>Change State</button>
                <LifecycleUpdatingChild />
            </div>
        )
    }
}

export default LifecycleUpdating
