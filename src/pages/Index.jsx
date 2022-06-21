import { useState } from 'react'
import { Link } from 'react-router-dom'

function Index (props) {
  // state to hold formData
  const container = {
    display: "flex",
    justifyContent: "space-around",
    flexFlow: "row wrap"
  }
  
  const card = {
    width: "70vw",
    border: "solid 2px black",
    borderRadius: "25px",
    margin: "1em"

  }

  // loaded function
  const loaded = () => {
    return props.people.map(person => (
      <div style={container}>
      <div style={card} key={person._id} className='person'>
        <Link to={`/people/${person._id}`}>
          <h1>{person.name}</h1>
        </Link>
        <img src={person.image} alt={person.name} />
        <h3>{person.title}</h3>
      </div>
      </div>
    ))
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return (
    <section>
      
      {props.people ? loaded() : loading()}
    </section>
  )
}

export default Index
