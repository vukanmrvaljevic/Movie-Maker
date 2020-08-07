import React from "react"
import UpdateNotes from "./UpdateNotes"
import axios from "axios"
import "./App.css"

function PostNotes(props) {
  const paper = props.post

  const deleteNote = async () => {
    await axios.delete(
      ` https://api.airtable.com/v0/app6T80RpAP8MShZI/Table%201/${props.post.id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_KEY}`,
        },
      }
    )
    props.updateFetchNoteInfo(!props.fetchNoteInfo)
  }

  return (
    <div>
      <section className="notes-container">
        <h2>{paper.fields.name}</h2>
        <h2>{paper.fields.notes}</h2>
      </section>
      <UpdateNotes
        post={paper}
        fetchNoteInfo={props.fetchNoteInfo}
        updateFetchNoteInfo={props.updateFetchNoteInfo}
      />
      <section className="button">
        <button className="delete-button" onClick={deleteNote}>
          Delete Section
        </button>
      </section>
    </div>
  )
}

export default PostNotes
