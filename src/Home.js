import React from "react"
import { Route, Link } from "react-router-dom"
import Actors from "./Actors"

function Home() {
  return (
    <div>
      <Link to="/actors">
        <h1>Home Page!!!</h1>
      </Link>
      <Route path="/actors">
        <Actors />
      </Route>
    </div>
  )
}

export default Home
