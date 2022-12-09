import React from "react";

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
    },
    like: {
        height: "30px",
    },
};

export default function Comment({ comment, updateLike }) {
    return (
        <div style={commentStyle.container}>
            <div>{comment.comment}</div>
            <div style={commentStyle.likes}>
                <div
                    style={{
                        marginRight: "5px",
                    }} 
                >
                    {comment.likes}
                </div>
                <button style={commentStyle.like} onClick={() => updateLike(comment)}>
                    Like
                </button>
            </div>
        </div>
    );
}