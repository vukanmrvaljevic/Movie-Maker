import React, { useState } from "react"
import axios from "axios"
import "./History.css"

function UpdateArtifact(props) {
  const [name, updateName] = useState(props.post.fields.name)
  const [artifact, updateArtifact] = useState(props.post.fields.artifact)
  const [image, updateImage] = useState(props.post.fields.image)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(
      `https://api.airtable.com/v0/app7JCVhsKVPmHS6X/Table%201/${props.post.id}`,
      {
        fields: {
          name: name,
          artifact: artifact,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_KEY}`,
          "Content-Type": "application/json",
        },
      }
    )
    props.updateFetchArtifactInfo(!props.fetchArtifactInfo)
    updateName("")
    updateArtifact("")
    updateImage("")
  }
  return (
    <>
      <main className="total-container">
        <form className="form-editor" onSubmit={handleSubmit}>
          <h2>Edit Actor List</h2>
          <label htmlFor="actor">Actor</label>
          <input
            name="text"
            id="actor"
            onChange={(e) => updateName(e.target.value)}
            value={name}
          />
          <label htmlFor="artifact">artifact</label>
          <input
            name="text"
            id="artifact"
            onChange={(e) => updateArtifact(e.target.value)}
            value={artifact}
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            onChange={(e) => updateImage(e.target.value)}
            value={image}
          />
          <input type="submit" value="Edit List" />
        </form>
      </main>
    </>
  )
}
export default UpdateArtifact
