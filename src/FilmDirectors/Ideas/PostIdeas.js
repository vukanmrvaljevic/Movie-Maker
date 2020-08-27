import React from "react"
import UpdateIdeas from "./UpdateIdeas"
import axios from "axios"
import "./Ideas.css"

function PostIdeas(props) {
  const post = props.post

  const deleteIdeas = async () => {
    await axios.delete(
      ` https://api.airtable.com/v0/appBj37EmzJnKE0d2/Table%201/${props.post.id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_KEY}`,
        },
      }
    )
    props.updateFetchIdeasInfo(!props.fetchIdeasInfo)
  }

  return (
    <div>
      <section className="ideas-container">
        <h2>{post.fields.name}</h2>
        <h2>{post.fields.ideas}</h2>
      </section>
      <UpdateIdeas
        post={post}
        fetchIdeasInfo={props.fetchIdeasInfo}
        updateFetchIdeasInfo={props.updateFetchIdeasInfo}
      />
      <section className="button">
        <button className="delete-button" onClick={deleteIdeas}>
          Delete Section
        </button>
      </section>
    </div>
  )
}

export default PostIdeas
