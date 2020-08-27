import React, { useState } from "react"
import axios from "axios"
import "./Literature.css"

function UpdateStory(props) {
  const [name, updateName] = useState(props.post.fields.name)
  const [story, updateStory] = useState(props.post.fields.story)
  const [image, updateImage] = useState(props.post.fields.image)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(
      `https://api.airtable.com/v0/app7JCVhsKVPmHS6X/Table%201/${props.post.id}`,
      {
        fields: {
          name: name,
          story: story,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_KEY}`,
          "Content-Type": "application/json",
        },
      }
    )
    props.updateFetchMovieInfo(!props.fetchMovieInfo)
    updateName("")
    updateStory("")
    updateImage("")
  }
  return (
    <>
      <main className="total-container">
        <form className="form-editor" onSubmit={handleSubmit}>
          <h2>Edit Character List</h2>
          <label htmlFor="character">Characters</label>
          <input
            name="text"
            id="character"
            onChange={(e) => updateName(e.target.value)}
            value={name}
          />
          <label htmlFor="story">Story</label>
          <input
            name="text"
            id="story"
            onChange={(e) => updateStory(e.target.value)}
            value={story}
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            onChange={(e) => updateImage(e.target.value)}
            value={image}
          />
          <input type="submit" value="Edit Character List" />
        </form>
      </main>
    </>
  )
}
export default UpdateStory
