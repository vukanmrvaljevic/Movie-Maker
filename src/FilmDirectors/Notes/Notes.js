import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import image from "./home.png"

import CreateNotes from "./CreateNotes"
import PostNotes from "./PostNotes"

function Notes() {
  const [noteInfo, updateNoteInfo] = useState([])
  const [fetchNoteInfo, updateFetchNoteInfo] = useState(false)

  useEffect(() => {
    const apiCall = async () => {
      const posts = await axios.get(
        "https://api.airtable.com/v0/app6T80RpAP8MShZI/Table%201?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_KEY}`,
          },
        }
      )
      updateNoteInfo(posts.data.records)
    }
    apiCall()
  }, [fetchNoteInfo])

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
      <CreateNotes
        updateFetchNoteInfo={updateFetchNoteInfo}
        fetchNoteInfo={fetchNoteInfo}
      />
      {noteInfo.map((post) => (
        <PostNotes
          post={post}
          key={post.id}
          updateFetchNoteInfo={updateFetchNoteInfo}
          fetchNoteInfo={fetchNoteInfo}
        />
      ))}
    </main>
  )
}

export default Notes
