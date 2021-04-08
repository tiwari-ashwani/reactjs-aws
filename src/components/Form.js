import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username:  '',
            strength:  '',
            aliasName: ''
        }
    }

    userNameChangeHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    strengthChangeHandler = (event) => {
        this.setState({
            strength: event.target.value
        })
    }

    aliasNameChangeHandler = (event) => {
        this.setState({
            aliasName: event.target.value
        })
    }

    submitHandler = (event) => {
        alert(this.state.username + ' -- '+this.state.strength + ' -- '+this.state.aliasName)
        event.preventDefault()
    }

    render() {
        const {username, strength, aliasName} = this.state
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    Form Component<br /><br />
                    <label>Username</label>
                    <input type='text' value={username}
                        onChange={this.userNameChangeHandler} />
                </div><br />
                <div>
                    <label>Strength</label>
                    <textarea value={strength}
                    onChange={this.strengthChangeHandler}></textarea>
                </div><br />
                <div>
                    <label>Alias Name</label>
                    <select value={aliasName}
                    onChange={this.aliasNameChangeHandler}>
                        <option value='hulk'>Hulk</option>
                        <option value='ironman'>Iron Man</option>
                        <option value='spiderman'>Spider Man</option>
                    </select>
                </div><br />
                <button type='submit'>Submit Data</button>
            </form>
        )
    }
}

export default Form