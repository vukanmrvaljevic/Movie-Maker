import React, { useEffect, useState } from "react"
import axios from "axios"

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

  return (
    <main>
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
