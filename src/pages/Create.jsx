import { useState } from "react";

export default function Create(props) {
    const container = {
        height: "100%",
        width: "100%",
        position: "relative",
        backgroundColor: "blue"
    }
    const form = {
        margin: "0",
        position: "absolute",
        top: "33%",
    }


    const [newForm, setNewForm] = useState({
  name: '',
  image: '',
  title: ''
})

// handleChange function for form
const handleChange = event => {
  setNewForm(prevState => ({
    ...prevState,
    [event.target.name]: event.target.value
  }))
}

// handle submit function for form
const handleSubmit = event => {
  event.preventDefault()
  props.createPeople(newForm)
  setNewForm({
    name: '',
    image: '',
    title: ''
  })
}
return (
    <div className={container}>
    <form style={form} onSubmit={handleSubmit}>
  <input
    type='text'
    value={newForm.name}
    name='name'
    placeholder='name'
    onChange={handleChange}
  />
  <input
    type='text'
    value={newForm.image}
    name='image'
    placeholder='image URL'
    onChange={handleChange}
  />
  <input
    type='text'
    value={newForm.title}
    name='title'
    placeholder='title'
    onChange={handleChange}
  />
  <input type='submit' value='Create Person' />
</form>
</div>
)
}

