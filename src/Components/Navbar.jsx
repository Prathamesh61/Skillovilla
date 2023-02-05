import React from 'react'
import { Link } from 'react-router-dom'
import style from '../styles/Navbar.module.css'

const Navbar = () => {
    const isUser = JSON.parse(localStorage.getItem("CurrentUser")) || null;
    const logout = () => {
        localStorage.removeItem("currentUser");
    }
    return (
        <div className={style.main}>
            <Link to={"/"}>Comments</Link>
            {isUser ?
                <button onClick={() => logout()}>Logout</button>
                :
                <Link to={"/login"}>Login</Link>
            }
            {isUser ?
                ""
                :
                <Link to={"/signup"}>Sign Up</Link>
            }
        </div >
    )
}

export default Navbar