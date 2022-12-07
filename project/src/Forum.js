import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";

const styles = {
    container: {
        margin: "30px",
    },
    commentsContainer: {
        padding: "10px 15px",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
    },
    comments: {
        width: "100%",
    },
};

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
        <div style={styles.container}>
            Forum
            <div>
                <CommentForm addComment={addComment} />
                <div style={styles.commentsContainer}>
                    <h2>Comments</h2>
                    <div style={styles.comments}>{renderComments()}</div>
                </div>
            </div>
        </div>
    );
}

export default Forum;