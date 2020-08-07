import React, { useState } from "react"
import axios from "axios"
import "./App.css"

function UpdateIdeas(props) {
  const [name, updateName] = useState(props.post.fields.name)
  const [ideas, updateIdeas] = useState(props.post.fields.ideas)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(
      `https://api.airtable.com/v0/appBj37EmzJnKE0d2/Table%201/${props.post.id}`,
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
      <form className="editor-ideas" onSubmit={handleSubmit}>
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
          cols="30"
          rows="10"
          onChange={(e) => updateIdeas(e.target.value)}
          value={ideas}
        ></textarea>
        <input type="submit" value="Edit Ideas" />
      </form>
    </div>
  )
}
export default UpdateIdeas
