import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import image from "./home.png"

import PostStory from "./PostStory"
import CreateStory from "./CreateStory"

function Story() {
  const [storyInfo, updateStoryInfo] = useState([])
  const [fetchStoryInfo, updateFetchStoryInfo] = useState(false)

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
      updateStoryInfo(posts.data.records)
    }
    apiCall()
  }, [fetchStoryInfo])

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
      </nav>
      <CreateStory
        updateFetchStoryInfo={updateFetchStoryInfo}
        fetchStoryInfo={fetchStoryInfo}
      />
      {storyInfo.map((post) => (
        <PostStory
          post={post}
          key={post.id}
          updateFetchStoryInfo={updateFetchStoryInfo}
          fetchStoryInfo={fetchStoryInfo}
        />
      ))}
    </main>
  )
}

export default Story
