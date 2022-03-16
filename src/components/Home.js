import React from "react"
export const Home = () => {
    const screenArcherUser = JSON.parse(sessionStorage.getItem('screenarcher_user'))
    return (
        <>
            <h2>ScreenArchers</h2>
            <small>Capture Your imagination.</small>
    
            <h3>{`Welcome, ${screenArcherUser.name}`} </h3>
        </>
    )
} 