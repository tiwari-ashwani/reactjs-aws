import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        //Approach 1 with IF ELSE
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Mr. Bruce Wayne !!</div>
        // } else {
        //     return <div>Welcome Guest, kindly login !!</div>
        // }

        //Approach 2 with Element Variables
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Mr. Bruce Wayne !!</div>
        // }else{
        //     message = <div>Welcome Guest, kindly login !!</div>
        // }
        // return<div> {message} </div>

        //Approach 3 with TERNARY CONDITIONAL OPERATOR
        // return (
        //     this.state.isLoggedIn ? (
        //     <div>Welcome Mr. Bruce Wayne !!</div>
        //     ) : (
        //     <div>Welcome Guest, kindly login !!</div>
        //     )
        // )

        //Approach 4 with SHORT CIRCUIT OPERATOR
        return this.state.isLoggedIn && <div>Welcome Mr. Bruce Wayne !!</div>
    }
}

export default UserGreeting