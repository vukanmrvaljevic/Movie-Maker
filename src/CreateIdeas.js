import React, { useState } from "react"
import axios from "axios"
import "./App.css"
import image from "./ideas.png"

function CreateIdeas(props) {
  const [name, updateName] = useState("")
  const [ideas, updateIdeas] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(
      "https://api.airtable.com/v0/appBj37EmzJnKE0d2/Table%201",
      {
        fields: {
          name: name,
          ideas: ideas,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_KEY}`,
          "Content-Type": "application/json",
        },
      }
    )
    props.updateFetchIdeasInfo(!props.fetchIdeasInfo)
    updateName("")
    updateIdeas("")
  }
  return (
    <div>
      <form className="form-creator" onSubmit={handleSubmit}>
        <section className="image">
          <img src={image} alt="idea" width="150px" />
        </section>
        <label htmlFor="name">Name</label>
        <input
          name="text"
          id="name"
          onChange={(e) => updateName(e.target.value)}
          value={name}
        />
        <label htmlFor="ideas">Ideas</label>
        <textarea
          name="text"
          id="ideas"
          cols="15"
          rows="5"
          onChange={(e) => updateIdeas(e.target.value)}
          value={ideas}
        ></textarea>
        <input type="submit" value="Submit Ideas" />
      </form>
    </div>
  )
}
export default CreateIdeas
