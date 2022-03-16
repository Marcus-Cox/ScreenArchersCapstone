import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { Login } from './auth/Login'
import { Register } from './auth/Register'
import { Home } from "./Home.js"
import { PostList } from "./posts/PostList"
import { PostForm } from "./posts/PostForm"

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
    const PrivateRoute = ({ children }) => {
      return isAuthenticated ? children : <Navigate to="/login" />;
    }
  
    const setAuthUser = (user) => {
      sessionStorage.setItem("screenarcher_user", JSON.stringify(user))
      setIsAuthenticated(sessionStorage.getItem("screenarcher_user") !== null)
    }
  
    return (
      <>
        <Routes>
  
          <Route exact path="/login" element={<Login setAuthUser={setAuthUser} />} />
          <Route exact path="/register" element={<Register />} />
  
          <Route exact path="/" 
          element={
              <PrivateRoute>
                      <Home />
              </PrivateRoute>
          } />

        <Route exact path="/" 
        element={
            <PrivateRoute>
                <PostList />
            </PrivateRoute>} />
            
        <Route path="/create" 
           element={
            <PrivateRoute>
                <PostForm />
            </PrivateRoute>} />
            </Routes>
      </>
    )
          }