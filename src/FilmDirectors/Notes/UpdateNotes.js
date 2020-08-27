import React, { useState } from "react"
import axios from "axios"
import "./Notes.css"

function UpdateNotes(props) {
  const [name, updateName] = useState(props.post.fields.name)
  const [notes, updateNotes] = useState(props.post.fields.notes)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(
      `https://api.airtable.com/v0/app6T80RpAP8MShZI/Table%201/${props.post.id}`,
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

  return (
    <div>
      <form className="editor-notes" onSubmit={handleSubmit}>
        <h3>Update Notes</h3>
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
          rows="10"
          onChange={(e) => updateNotes(e.target.value)}
          value={notes}
        ></textarea>
        <input type="submit" value="Submit Notes" />
      </form>
    </div>
  )
}
export default UpdateNotes
