import React, { Component } from 'react'

class AddNinja extends Component {
    state  = {
        name: null,
        age: null,
        belt: null
    }
    hnadleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.lot(this.state);
    }
    render(){
        return (
            <div>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange} />
                    <label htmlFor="belt">Belt:</label>
                    <input type="text" id="belt" onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}