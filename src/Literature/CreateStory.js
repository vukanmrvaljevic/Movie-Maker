import React, { useState } from "react"
import axios from "axios"


function CreateStory(props) {
  const [name, updateName] = useState("")
  const [story, updateStory] = useState("")
  const [image, updateImage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(
      "https://api.airtable.com/v0/app7JCVhsKVPmHS6X/Table%201",
      {
        fields: {
          name: name,
          story: story,
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
    props.updateFetchStoryInfo(!props.fetchStoryInfo)
    updateName("")
    updateStory("")
    updateImage("")
  }

  //   const myStyle = {
  //     width: "120px",
  //     height: "90px",
  //     borderRadius: "10px",
  //   }
  return (
    <>
      <form className="form-maker" onSubmit={handleSubmit}>
        {/* <img src={images} alt="idea" style={myStyle} /> */}
        <label className="stories" htmlFor="story">
          Story
        </label>
        <input
          name="text"
          id="story"
          onChange={(e) => updateName(e.target.value)}
          value={name}
        />
        <label htmlFor="characters">Character</label>
        <input
          name="text"
          id="character"

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
        <input type="submit" value="Submit Story-List" />
      </form>
    </>
  )
}
export default CreateStory
