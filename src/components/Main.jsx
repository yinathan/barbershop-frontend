import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'
import Create from '../pages/Create'
import Home from '../pages/Home'

function Main (props) {
  const [people, setPeople] = useState(null)


  const URL = 'https://fullstack-mern-backend-ny.herokuapp.com/barbers/'

  const getPeople = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setPeople(data)
  }

  const createPeople = async person => {
    // make post request to create people
    await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify(person)
    })
    // update list of people
    getPeople()
  }

  const updatePeople = async (person, id) => {
  // make put request to update people
  await fetch(URL + person._id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'Application/json'
    },
    body: JSON.stringify(person)
  })
  // update list of people
  getPeople()
}

const deletePeople = async id => {
  // make delete request to delete people
  await fetch(URL + id, {
    method: 'DELETE'
  })
  // update list of people
  getPeople()
}


  useEffect(() => {getPeople()}, [])

  return (
<main>
  <Routes>
    <Route
    exact
    path="/"
    element={< Home />} />
    <Route
      exact 
      path='/new'
      element={<Create />}
      />
    <Route
      exact
      path='/barbers'
      element={<Index people={people} createPeople={createPeople} />}
    />
    <Route
      path='/people/:id'
      element={
        <Show
          people={people}
          updatePeople={updatePeople}
          deletePeople={deletePeople}
        />
      }
    />
  </Routes>
</main>

  )
}

export default Main
