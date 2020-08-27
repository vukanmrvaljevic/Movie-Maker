import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import image from "./home.png"

import PostActors from "./PostActors"
import CreateActors from "./CreateActors"

function Actors() {
  const [movieInfo, updateMovieInfo] = useState([])
  const [fetchMovieInfo, updateFetchMovieInfo] = useState(false)

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
      updateMovieInfo(posts.data.records)
    }
    apiCall()
  }, [fetchMovieInfo])

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
      <CreateActors
        updateFetchMovieInfo={updateFetchMovieInfo}
        fetchMovieInfo={fetchMovieInfo}
      />
      {movieInfo.map((post) => (
        <PostActors
          post={post}
          key={post.id}
          updateFetchMovieInfo={updateFetchMovieInfo}
          fetchMovieInfo={fetchMovieInfo}
        />
      ))}
    </main>
  )
}

export default Actors
