import React from "react"
import { Link } from "react-router-dom"
import "./Menu.css"

function Menu() {
  return (
    <div className="main-menu">
      <Link className="one" to="/actors">
        Film
      </Link>
      <Link className="two" to="/tv">
        TV
      </Link>
      <Link className="three" to="/literature">
        Literature
      </Link>
      <Link className="three" to="/historians">
        History
      </Link>
    </div>
  )
}

export default Menu
