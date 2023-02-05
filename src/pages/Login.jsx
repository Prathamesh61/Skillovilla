import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import style from '../styles/Login.module.css'
const initial = {
    userId: "",
    password: ""
}
const Login = () => {
    const [user, setUser] = useState(initial);
    const navigate = useNavigate();

    const handle = (e) => {
        const { name: key, value } = e.target
        setUser({ ...user, [key]: value })
    }
    console.log(user);

    const handleLogin = (user) => {
        return axios.get('https://mock4-np2h.onrender.com/user', user)
            .then((r) => {
                console.log(r.data);
                const data = r.data
                let isUser = data?.find((el) => {
                    return user.userId === el?.userId && user.password === el?.password;
                })
                if (isUser) {
                    localStorage.setItem('currentUser', JSON.stringify(isUser));
                    alert("Login SuccessFull")
                    navigate("/")
                }
                console.log("isUSer", isUser);
            })
            .catch((err) => {
                console.log(err);
                alert("Something went wrong")
            })
    }


    return (
        <div className={style.main}>
            <div className={style.login_card}>
                <div>
                    <label>UserId</label>
                    <input onChange={handle} placeholder={"Enter userID"} value={user.userId} name='userId' type="tel" />
                </div>
                <div>
                    <label>Password</label>
                    <input onChange={handle} placeholder={"Enter Password"} value={user.password} name='password' type="password" />
                </div>
                <div>
                    <button onClick={() => handleLogin(user)}>
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login