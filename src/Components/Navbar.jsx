import React from 'react'
import { Link } from 'react-router-dom'
import style from '../styles/Navbar.module.css'

const Navbar = () => {
    const token = "";
    const logout = () => {

    }
    return (
        <div className={style.main}>
            <Link to={"/"}>Comments</Link>
            {token ?
                <button onClick={() => logout()}>Logout</button>
                :
                <Link to={"/login"}>Login</Link>
            }
            {token ?
                ""
                :
                <Link to={"/signup"}>Sign Up</Link>
            }
        </div >
    )
}

export default Navbar