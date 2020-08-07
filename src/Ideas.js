import React, { useEffect, useState } from "react"
import axios from "axios"

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

  return (
    <main>
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
