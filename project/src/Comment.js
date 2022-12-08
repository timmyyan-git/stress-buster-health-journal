import React from "react";
import styles from "./forum.module.css"; 


const commentStyle = {
    container: {
        padding: "20px",
        display: "flex",
        marginBottom: "20px",
        borderRadius: "30px",
        width: "90%",
        backgroundColor: "#79b0ab",
        alignItems: "center",
    },
    likes: {
        marginLeft: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        textAlign: "center",
        padding: "5px",
        borderRadius: "10px"
    },
    like: {
        height: "30px",
        backgroundColor: "#67b2ab",
        border: "none",
        color: "red",
        fontSize: "25px",
        borderRadius: "10px"

    },
};

export default function Comment({ comment, updateLike }) {
    return (
        <div style={commentStyle.container}>
            <div>{comment.comment}</div>
            <div id={styles['comment-likes']} style={commentStyle.likes}>
                <div
                    style={{
                        marginRight: "5px",
                    }} 
                >
                    {comment.likes}
                </div>
                <button id={styles['comment-likes']} style={commentStyle.like} onClick={() => updateLike(comment)}>
                    {"\u2665"}
                </button>
            </div>
        </div>
    );
}