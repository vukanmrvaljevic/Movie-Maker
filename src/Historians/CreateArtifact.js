import React, { useState } from "react"
import axios from "axios"
// import images from "./casting.png"

function CreateArtifact(props) {
  const [name, updateName] = useState("")
  const [artifact, updateArtifact] = useState("")
  const [image, updateImage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(
      "https://api.airtable.com/v0/app7JCVhsKVPmHS6X/Table%201",
      {
        fields: {
          name: name,
          artifact: artifact,
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
    props.updateFetchArtifactInfo(!props.fetchArtifactInfo)
    updateName("")
    updateArtifact("")
    updateImage("")
  }

  //   const myStyle = {
  //     width: "120px",
  //     height: "90px",
  //     borderRadius: "10px",
  //   }
  return (
    <>
      <form className="form-creator" onSubmit={handleSubmit}>
        {/* <img src={images} alt="idea" style={myStyle} /> */}
        <label className="acting" htmlFor="actor">
          Actor
        </label>
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
        <input type="submit" value="Submit Actors-List" />
      </form>
    </>
  )
}
export default CreateArtifact
