import React, { useState } from 'react'
import style from '../styles/Signup.module.css'
const initial = {
    userId: "",
    phone_number: "",
    password: ""
}
const Signup = () => {
    const [user, setUser] = useState(initial);
    const handle = (e) => {
        const { name: key, value } = e.target
        setUser({ ...user, [key]: value })
    }
    const handleSignup = (user) => {

    }
    return (
        <div className={style.main}>
            <div className={style.signup_card}>
                <div>
                    <label>UserId</label>
                    <input onChange={handle} placeholder={"Enter Phone Number"} value={user.userId} name='phone_number' type="tel" />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input onChange={handle} placeholder={"Enter Phone Number"} value={user.phone_number} name='phone_number' type="tel" />
                </div>
                <div>
                    <label>Password</label>
                    <input onChange={handle} placeholder={"Enter Password"} value={user.password} name='password' type="password" />
                </div>
                <div >
                    <button onClick={() => handleSignup(user)}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Signup