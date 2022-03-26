import React,  {useState} from "react"
import { ApplicationViews } from "./ApplicationViews"
// import { NavBar } from "./nav/NavBar"
import { ToolBar } from "./nav/ToolBar"
// import { SideDrawer } from "./SideDrawer/SideDrawer"
// import { Backdrop } from "./Backdrop/Backdrop"
import "./ScreenArchers.css"

export const ScreenArchers = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("screenarchers_user") !== null)

  const setAuthUser = (user) => {
      sessionStorage.setItem("screenarchers_user", JSON.stringify(user))
      setIsAuthenticated(sessionStorage.getItem("screenarchers_user") !== null)
  }

  const clearUser = () => {
      sessionStorage.clear();
      setIsAuthenticated(sessionStorage.getItem("screenarchers_user") !== null)
  }

  return (
    <>
    <div style = {{height: '100%'}}>
      <ToolBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
      {/* <SideDrawer/>
      <Backdrop/> */}
      
      <ApplicationViews 
          setAuthUser={setAuthUser}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
      />
      </div>
    </>
  )
}