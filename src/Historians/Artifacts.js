import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import image from "./home2.png"

import PostArtifact from "./PostArtifact"
import CreateArtifact from "./CreateArtifact"

function Artifacts() {
  const [artifactInfo, updateArtifactInfo] = useState([])
  const [fetchArtifactInfo, updateFetchArtifactInfo] = useState(false)

  useEffect(() => {
    const apiCall = async () => {
      const posts = await axios.get(
        "https://api.airtable.com/v0/app7JCVhsKVPmHS6X/Table%201?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_KEY}`,
          },
        }
      )
      updateArtifactInfo(posts.data.records)
    }
    apiCall()
  }, [fetchArtifactInfo])

  const myStyle = {
    width: "120px",
    height: "90px",
    borderRadius: "10px",
  }
  return (
    <main>
      <nav className="nav-bar">
        <Link className="link-one" to="/" exact>
          <img src={image} alt="home-page" style={myStyle} />
        </Link>
        {/* <Link className="link-one" to="/Artifact">
          Artifact
        </Link>
        <Link className="link-two" to="/ideas">
          Movie-Ideas
        </Link>
        <Link className="link-three" to="/notes">
          Movie-Notes
        </Link> */}
      </nav>
      <CreateArtifact
        updateFetchArtifactInfo={updateFetchArtifactInfo}
        fetchArtifactInfo={fetchArtifactInfo}
      />
      {artifactInfo.map((post) => (
        <PostArtifact
          post={post}
          key={post.id}
          updateFetchArtifactInfo={updateFetchArtifactInfo}
          fetchArtifactInfo={fetchArtifactInfo}
        />
      ))}
    </main>
  )
}

export default Artifacts
