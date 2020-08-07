import React, { useState } from "react"
import axios from "axios"

function CreateActors(props) {
  const [name, updateName] = useState("")
  const [movie, updateMovie] = useState("")
  const [image, updateImage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(
      "https://api.airtable.com/v0/app7JCVhsKVPmHS6X/Table%201",
      {
        fields: {
          name: name,
          movie: movie,
          image: image,
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
      <form className="form-creator" onSubmit={handleSubmit}>
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
        <input type="submit" value="Submit Actors-List" />
      </form>
    </>
  )
}
export default CreateActors
