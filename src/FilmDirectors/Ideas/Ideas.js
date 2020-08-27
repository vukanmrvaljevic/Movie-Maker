import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import image from "./home.png"

import CreateIdeas from "./CreateIdeas"
import PostIdeas from "./PostIdeas"

function Ideas() {
  const [ideasInfo, updateIdeasInfo] = useState([])
  const [fetchIdeasInfo, updateFetchIdeasInfo] = useState(false)

  useEffect(() => {
    const apiCall = async () => {
      const posts = await axios.get(
        "https://api.airtable.com/v0/appBj37EmzJnKE0d2/Table%201?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_KEY}`,
          },
        }
      )
      updateIdeasInfo(posts.data.records)
    }
    apiCall()
  }, [fetchIdeasInfo])

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
        <Link className="link-one" to="/actors">
          Actors
        </Link>
        <Link className="link-two" to="/ideas">
          Movie-Ideas
        </Link>
        <Link className="link-three" to="/notes">
          Movie-Notes
        </Link>
      </nav>
      <CreateIdeas
        updateFetchIdeasInfo={updateFetchIdeasInfo}
        fetchIdeasInfo={fetchIdeasInfo}
      />
      {ideasInfo.map((post) => (
        <PostIdeas
          post={post}
          key={post.id}
          updateFetchIdeasInfo={updateFetchIdeasInfo}
          fetchIdeasInfo={fetchIdeasInfo}
        />
      ))}
    </main>
  )
}

export default Ideas
