import React from 'react'

const Contact = (props) => {
  setTimeout(() => {
    props.history.push('/about')
  }, 2000);
  return (
    <div className="container">
        <h4 className="center">Contact</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, vitae maxime. Animi vitae, adipisci magnam nisi recusandae ut suscipit explicabo quos molestiae, ullam ratione ad unde, nesciunt optio illo nulla.</p>
    </div>
  )
}

export default Contact