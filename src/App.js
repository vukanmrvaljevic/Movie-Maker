import React from "react"
import { Route } from "react-router-dom"
import "./App.css"
import Actors from "./FilmDirectors/Actors/Actors"
import Menu from "./Menu"
import Artifacts from "./Historians/Artifacts"
import Story from "./Literature/Story"

function App() {
  return (
    <div>
      <Route path="/" exact>
        <Menu />
      </Route>
      <Route path="/actors">
        <Actors />
      </Route>
      <Route path="/literature">
        <Story />
      </Route>
      <Route path="/historians">
        <Artifacts />
      </Route>
    </div>
  )
}

export default App
