import React from "react"
import { Route, Link } from "react-router-dom"
import "./App.css"
import Actors from "./Actors"
import Ideas from "./Ideas"
import Notes from "./Notes"

function App() {
  return (
    <div>
      <nav className="nav-bar">
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
      <Route path="/actors">
        <Actors />
      </Route>
      <Route path="/ideas">
        <Ideas />
      </Route>
      <Route path="/notes">
        <Notes />
      </Route>
    </div>
  )
}

export default App
