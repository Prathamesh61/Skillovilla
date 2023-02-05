import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Comment from '../pages/Comment'
import Comments from '../pages/Comments'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/' element={<Comments />}></Route>
        </Routes>
    )
}

export default AllRoutes