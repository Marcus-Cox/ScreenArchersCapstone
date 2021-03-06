import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

export const NavBar = (props) => {
  return (
    
    <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
            </li>
        <li className="nav-item">
          <Link className="nav-link" to="/post/create">Creat New Post</Link>
            </li>
        <li className="nav-item">
          <Link className="nav-link" to="/posts">Posts</Link>
            </li>
        <li className="nav-item">
          <Link className="nav-link" to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  )
}
