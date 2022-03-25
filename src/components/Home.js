import React from "react"
import Comments from "./comments/Comments"
export const Home = () => {
    const screenArcherUser = JSON.parse(sessionStorage.getItem('screenarcher_user'))
    return (
        <>
            <h2>ScreenArchers</h2>
            <small>Capture Your imagination.</small>
    
            <h3>{`Welcome, ${screenArcherUser.name}`} </h3>

            <div>Lastest Content will go here</div>
            <Comments/>
        </>
    )
} 