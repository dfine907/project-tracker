import React from 'react'

function Pet(props) {

  return (
    <>
      <main>
        <h2>Pets</h2>
        <p>I have a {props.animal}</p>
        <p> My pet's name is {props.name}</p>
        <img src={props.image} alt={`${props.name}`}  />
      </main>
    </>
  )
}

export default Pet
