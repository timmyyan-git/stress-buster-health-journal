import { useState } from "react";
import styles from "./forum.module.css"; 

const style = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 50px",
    },
    textBox: {
        marginBottom: "20px",
        width: "100%",
        padding: "10px 20px",
        borderRadius: "30px",
        resize: "none",
    },
    submit: {
        height: "40px",
        width: "95px",
        backgroundColor: "#d1774c",
        borderRadius: "30px",
        color: "white",
        border: "none"
    },
};

function CommentForm({ addComment }) {
    const [comment, setComment] = useState("");

    return (
        
        <div style={style.container}>
            <textarea
                style={style.textBox}
                rows="5"
                cols="100"
                placeholder="Enter comment here..."
                onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button id={styles["comment-submit"]} style={style.submit} onClick={() => addComment(comment)}>
                Submit!
            </button>
        </div>
      
    );
}

export default CommentForm;