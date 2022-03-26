import React from "react"
import { Link } from "react-router-dom"
// This Code is Technicall Functional, but does not work with my project as is with my component structure and skillset

export const SideDrawer = (props) => {
    return(
        <nav className="side-drawer">
            <ul className="">
                <li className="">
                 <Link className="" to="/post/create">Creat New Post</Link>
                 </li>
                <li className="">
                <Link className="" to="/posts">Posts</Link>
                 </li>
            </ul>
        </nav>
    )
}