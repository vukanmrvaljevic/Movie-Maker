import React from "react"
import UpdateArtifact from "./UpdateArtifact"
import axios from "axios"
import "./History.css"

function PostArtifact(props) {
  const post = props.post

  const deletePost = async () => {
    await axios.delete(
      ` https://api.airtable.com/v0/app7JCVhsKVPmHS6X/Table%201/${props.post.id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_KEY}`,
        },
      }
    )
    props.updateFetchArtifactInfo(!props.fetchArtifactInfo)
  }

  const myStyle = {
    borderRadius: "10px",
  }
  return (
    <div>
      <main className="total-container">
        <section className="form-container">
          <h2>{post.fields.name}</h2>
          <h2>{post.fields.movie}</h2>
          <img src={post.fields.image} alt="img" style={myStyle} />
        </section>
        <UpdateArtifact
          post={post}
          fetchArtifactInfo={props.fetchArtifactInfo}
          updateFetchArtifactInfo={props.updateFetchArtifactInfo}
        />
        <section className="button">
          <button className="delete-button" onClick={deletePost}>
            Delete Section
          </button>
        </section>
      </main>
    </div>
  )
}

export default PostArtifact
