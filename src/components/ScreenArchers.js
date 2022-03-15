import React,  {useState} from "react"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
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
      <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
      <ApplicationViews 
          setAuthUser={setAuthUser}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
      />
    </>
  )
}