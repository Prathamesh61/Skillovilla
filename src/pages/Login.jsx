import axios from 'axios';
import React, { useState } from 'react'
import style from '../styles/Login.module.css'
const initial = {
    userId: "",
    password: ""
}
const Login = () => {
    const [user, setUser] = useState(initial);
    const handle = (e) => {
        const { name: key, value } = e.target
        setUser({ ...user, [key]: value })
    }
    const handleLogin = (user) => {
        console.log(user);
        // return axios.post('https://mock4-np2h.onrender.com/user', user)
        //     .then((r) => {
        //         console.log(r);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
    }


    return (
        <div className={style.main}>
            <div className={style.login_card}>
                <div>
                    <label>UserId</label>
                    <input onChange={handle} placeholder={"Enter Phone Number"} value={user.phone_number} name='phone_number' type="tel" />
                </div>
                <div>
                    <label>Password</label>
                    <input onChange={handle} placeholder={"Enter Password"} value={user.password} name='password' type="password" />
                </div>
                <div >
                    <button onClick={() => handleLogin(user)}>
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login