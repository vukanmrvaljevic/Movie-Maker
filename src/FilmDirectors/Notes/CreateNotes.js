import React, { useState } from "react"
import axios from "axios"
import "./Notes.css"
import image from "./movie-notes.jpg"

function CreateNotes(props) {
  const [name, updateName] = useState("")
  const [notes, updateNotes] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(
      "https://api.airtable.com/v0/app6T80RpAP8MShZI/Table%201",
      {
        fields: {
          notes: notes,
          name: name,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_KEY}`,
          "Content-Type": "application/json",
        },
      }
    )
    props.updateFetchNoteInfo(!props.fetchNoteInfo)
    updateName("")
    updateNotes("")
  }
  const myStyle = { width: "80px", height: "90px", borderRadius: "10px" }
  return (
    <div>
      <form className="form-creator" onSubmit={handleSubmit}>
        <img src={image} alt="idea" style={myStyle} />
        <label htmlFor="name">Name</label>
        <input
          name="text"
          id="name"
          onChange={(e) => updateName(e.target.value)}
          value={name}
        />
        <label htmlFor="notes">Notes</label>
        <textarea
          name="text"
          id="notes"
          cols="20"
          rows="5"
          onChange={(e) => updateNotes(e.target.value)}
          value={notes}
        ></textarea>
        <input type="submit" value="Submit Notes" />
      </form>
    </div>
  )
}
export default CreateNotes
