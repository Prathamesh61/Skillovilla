import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import style from '../styles/Signup.module.css'
const initial = {
    userId: "",
    phone_number: "",
    password: ""
}
const Signup = () => {
    const [user, setUser] = useState(initial);
    const [userList, setUserList] = useState([]);
    const navigate = useNavigate();

    const handle = (e) => {
        const { name: key, value } = e.target
        setUser({ ...user, [key]: value })
    }

    const getUsers = () => {
        return axios.get('https://mock4-np2h.onrender.com/user')
            .then((r) => {
                console.log(r.data);
                setUserList(r.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getUsers();
    }, [])


    const handleSignup = (user) => {
        let isUser = userList?.find((el) => {
            return user.phone_number == el?.phone_number && user.userId.toLowerCase() == el?.userId.toLowerCase();
        })
        if (isUser) {
            return alert("User Alredy Exists");
        } else {
            return axios.post('https://mock4-np2h.onrender.com/user', user)
                .then((r) => {
                    console.log(r.data);
                    alert("Signup Successfull")
                    navigate("/login")
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }
    return (
        <div className={style.main}>
            <div className={style.signup_card}>
                <div>
                    <label>UserId</label>
                    <input onChange={handle} placeholder={"Enter userId"} value={user.userId} name='userId' type="tel" />
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