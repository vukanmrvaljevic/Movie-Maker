import React, { useState } from "react"
import axios from "axios"
import "./Actors.css"

function UpdateActors(props) {
  const [name, updateName] = useState(props.post.fields.name)
  const [movie, updateMovie] = useState(props.post.fields.movie)
  const [image, updateImage] = useState(props.post.fields.image)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(
      `https://api.airtable.com/v0/app7JCVhsKVPmHS6X/Table%201/${props.post.id}`,
      {
        fields: {
          name: name,
          movie: movie,
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
    updateMovie("")
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
          <label htmlFor="movie">Movie</label>
          <input
            name="text"
            id="movie"
            onChange={(e) => updateMovie(e.target.value)}
            value={movie}
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
export default UpdateActors
