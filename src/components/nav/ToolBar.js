import React, {useState} from "react"
import { Link } from "react-router-dom"
// import "bootstrap/dist/css/bootstrap.min.css"
import { DrawToggleButton } from "../SideDrawer/DrawToggleButton"
import { SideDrawer } from "../SideDrawer/SideDrawer"
// This Code is Technicall Functional, but does not work with my project as is with my component structure and skillset
export const ToolBar = (props) => {
  const [sidebar,setSidebar] = useState(false)
  const SideDrawer = () => setSidebar(!sidebar)
  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div>
        <DrawToggleButton onClick={SideDrawer}/>
        </div>
      <div className="toolbar_logo"><a href="/">ScreenArchers</a></div>
      <div className="spacer"/>
      <div className="toolbar_navigation-items">
      <ul className="">
        <li className="">
          <Link className="" to="/post/create">Creat New Post</Link>
            </li>
        <li className="">
          <Link className="" to="/posts">Posts</Link>
            </li>
        <li className="">
          <Link className="" to="/logout">Logout</Link>
        </li>
      </ul>
      </div>
     </nav>
    </header>
  )
}