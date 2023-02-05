import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Reply from '../Components/Reply'
import style from '../styles/Comment.module.css'
import Comment from './Comment';


const getNewComment = (value, isRootNode = false, parentNodeId) => {
    return {
        id: new Date(),
        senderName: "",
        recipientName: "",
        likes: 0,
        unlikes: 0,
        commentText: value,
        childCommments: [],
        isRootNode,
        parentNodeId,
    };
};

const initialState = {};

const Comments = () => {
    const [comments, setComments] = useState(initialState);
    const [pComment, setPComment] = useState({});
    const [rootComment, setRootComment] = useState("");


    const getComment = () => {
        return axios.get('https://mock4-np2h.onrender.com/comments')
            .then((r) => {
                console.log("working")
                console.log(r.data);
                setComments(r.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const postComment = (newComment) => {
        return axios.post('https://mock4-np2h.onrender.com/comments', newComment)
            .then((r) => {
                console.log("working")
                console.log(r);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getComment();
    }, [])

    const addComment = (parentId, newCommentText) => {
        let newComment = null;
        if (parentId) {
            console.log(parentId)
            newComment = getNewComment(newCommentText, false, parentId);
            postComment({
                ...comments,
                [parentId]: {
                    ...comments[parentId],
                    childCommments: [...comments[parentId]?.childCommments, newComment.id],
                },
            })
        } else {
            newComment = getNewComment(newCommentText, true, null);
        }
        setPComment(newComment);
        postComment({ ...comments, [newComment.id]: newComment });
        // setComments((comments) => ({ ...comments, [newComment.id]: newComment }));
    };

    const commentMapper = (comment) => {
        console.log(comment, "comment")
        return {
            ...comment,
            childCommments: comment?.childCommments
                ?.map((id) => comments[id])
                .map((comment) => {
                    commentMapper(comment)
                }),
        };
    };

    const enhancedComments = Object.values(comments)
        .filter((comment) => {
            return !comment?.parentNodeId;
        })
        .map(commentMapper);
    const onAdd = () => {
        addComment(null, rootComment);
        setRootComment("");
    };
    console.log(rootComment)

    return (
        <>
            <div className={style.main}>
                <h1>Comments</h1>
                <div className={style.comment_main}>
                    <img src='https://cdn-icons-png.flaticon.com/512/709/709579.png' />
                    <textarea value={rootComment} onChange={(e) => setRootComment(e.target.value)} maxLength='200' placeholder={'Join the discussion'} />
                    <button onClick={onAdd}>Submit</button>
                </div>
                <div
                    style={{
                        border: "1px solid blue",
                        width: "50%",
                        margin: "auto",
                        overflowX: "auto",
                        padding: "2rem",
                    }}>
                    {enhancedComments.map((comment, key) => {
                        return (
                            <Comment key={key} comment={comment} addComment={addComment} />
                        );
                    })}
                </div>
            </div >
            <Reply />
        </>
    )
}

export default Comments