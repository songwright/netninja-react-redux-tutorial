import React, { Component } from 'react';
import axios from 'axios'

class Home extends Component {
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res);
      })
  }
  render() {
      return (
      <div className="container">
          <h4 className="center">Home</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, vitae maxime. Animi vitae, adipisci magnam nisi recusandae ut suscipit explicabo quos molestiae, ullam ratione ad unde, nesciunt optio illo nulla.</p>
      </div>
    )
  } 
}

export default Home