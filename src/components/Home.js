import React from "react"
// import {UserManager} from "/home/marcus/workspace/screenarchers/src/modules/UserManager.js"

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

// export const WelcomeUser = ({ userName }) => {
//     let users.name = userName
//     return (
//       <>
//         <h3>Welcome, {userName} </h3>
//       </>
//     )
//   }