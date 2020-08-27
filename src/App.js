import React from "react"
import { Route } from "react-router-dom"
import "./App.css"
import Actors from "./FilmDirectors/Actors/Actors"
import Ideas from "./FilmDirectors/Ideas/Ideas"
import Notes from "./FilmDirectors/Notes/Notes"
import Menu from "./Menu"
import Artifacts from "./Historians/Artifacts"

function App() {
  return (
    <div>
      {/* <nav className="nav-bar">
        <Link className="link-one" to="/actors">
          Actors
        </Link>
        <Link className="link-two" to="/ideas">
          Movie-Ideas
        </Link>
        <Link className="link-three" to="/notes">
          Movie-Notes
        </Link>
      </nav> */}
      <Route path="/" exact>
        <Menu />
      </Route>
      <Route path="/actors">
        <Actors />
      </Route>
      <Route path="/menu">
        <Menu />
      </Route>
      <Route path="/ideas">
        <Ideas />
      </Route>
      <Route path="/notes">
        <Notes />
      </Route>
      <Route path="/historians">
        <Artifacts />
      </Route>
    </div>
  )
}

export default App
