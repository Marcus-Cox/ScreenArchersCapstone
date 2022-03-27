import React, {useState} from "react"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./SidebarData";

// import "bootstrap/dist/css/bootstrap.min.css"
// import { DrawToggleButton } from "../SideDrawer/DrawToggleButton"
// This Code is Technicall Functional, but does not work with my project as is with my component structure and skillset
export const SideBar = (props) => {
    const [sidebar,setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
  return (
      <>
      <div className="navbar">
      <Link to="#" className="menu-bars">
        <FaBars onClick={showSidebar}/>
      </Link>
      <div className="navbar_logo">ScreenArchers</div>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar} >
            <li className='navbar-toggle'>
                <Link to ='#' className="menu-bars">
                    <AiOutlineClose/>
                </Link>
            </li>
            {SidebarData.map((item,index) =>{
                return(
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                )
            })}
      </ul>
     </nav>
     </>
  )
}
