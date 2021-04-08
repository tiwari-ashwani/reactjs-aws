import React, { Component } from 'react'

class LifecycleUpdatingChild extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Tony Stark'
        }
        console.log('LCUC constructor')
    }


    static getDerivedStateFromProps(props, state) {
        console.log('LCUC getDerivedStateFromProps')
        return null
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LCUC getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LCUC componentDidUpdate')
    }

    shouldComponentUpdate(){
        console.log('LCUC shouldComponentUpdate')
        return true
    }

    render() {
        console.log('LCUC Render')
        return (
            <div>
                LCUC Render
            </div>
        )
    }
}

export default LifecycleUpdatingChild
