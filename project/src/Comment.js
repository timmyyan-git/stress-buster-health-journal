import React from "react";

const commentStyle = {
    container: {
        border: "1px black solid",
        padding: "1rem",
        display: "flex",
        marginBottom: "10px",
    },
    likes: {
        marginLeft: "auto",
        display: "flex",
        width: "200px",
        justifyContent: "space-between",
        alignItems: "center",
    },
    like: {
        height: "30px",
        width: "100px",
    },
};

export default function Comment({ comment, updateLike }) {
    return (
        <div style={commentStyle.container}>
            <div>{comment.comment}</div>
            <div style={commentStyle.likes}>
                <div>Likes: {comment.likes}</div>
                <button style={commentStyle.like} onClick={() => updateLike(comment)}>
                    Like
                </button>
            </div>
        </div>
    );
}