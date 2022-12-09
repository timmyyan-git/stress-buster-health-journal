import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import styles from "./forum.module.css"; 

function Forum() {
    const [comments, setComments] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/comments")
            .then((res) => res.json())
        .then((json) => setComments(json));
    }, []);

    const renderComments = () =>
        comments
            ? comments.map((comment) => (
                <Comment comment={comment} key={comment.id} updateLike={updateLike} />
            ))
        : null;

    const updateLike = ({ id, likes }) => {
        fetch(`http://localhost:3000/comments/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                likes: likes + 1,
            }),
        }).then(() => {
            const index = comments.findIndex((comment) => comment.id === id);
            comments[index]["likes"] = likes + 1;
            setComments([...comments]);
        });
    };

    const addComment = (comment) => {
        if (!comment) return;

        fetch(`http://localhost:3000/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment,
                likes: 0,
            }),
        })
            .then(() => {
                return fetch("http://localhost:3000/comments");
            })
            .then((res) => res.json())
            .then((json) => setComments(json));
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.pageTitle}>Forum</h2>
            <div className={styles.center}>
                <div className={styles.commentBox}>
                    <h1 className={styles.commentTitle}>Post a Comment</h1>
                    <CommentForm className={styles.commentForm} addComment={addComment} />
                </div>
                <div className={styles.commentsContainer}>
                    <h1
                        style={{
                            color: "white",
                            alignSelf: "flex-start",
                            margin: "0 0 5px 35px",
                        }}
                    >
                        Comments
                    </h1>
                    <div className={styles.comments}>{renderComments()}</div>
                </div>
            </div>
        </div>
    );
}

export default Forum;