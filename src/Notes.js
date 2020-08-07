import React, { useEffect, useState } from "react"
import axios from "axios"

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

  return (
    <main>
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
