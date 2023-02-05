import React from 'react'
import style from '../styles/Reply.module.css'
const Reply = ({comment,id}) => {
    return (
        <div className={style.main}>
            <img src='https://i.pravatar.cc/90?img=4' />
            <div className={style.comment}>
                <div className={style.name_section}>
                    <p>Prathamesh Rawool </p>
                    <p>&#x27A6; Pallavi Jagtap</p>
                    <p>&#8226;</p>
                    <p>7 Hours</p>
                </div>
                
                <textarea className={style.edit_section} disabled maxLength='200' value={'I Like Your Comment'} />
                <div className={style.like_section}>
                    <p>2 &and;</p>
                    <p>&#x2758;</p>
                    <p>3 &or;</p>
                    <p>&#8226;</p>
                    <p>Reply</p>
                    <p>&#8226;</p>
                    <p>Edit</p>
                </div>
            </div>
        </div>
    )
}

export default Reply