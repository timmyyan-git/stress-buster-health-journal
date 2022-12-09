import { useState } from "react";

const styles = {
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
        backgroundColor: "orange",
        borderRadius: "30px",
        color: "white",
    },
};

function CommentForm({ addComment }) {
    const [comment, setComment] = useState("");

    return (
        <div style={styles.container}>
            <textarea
                style={styles.textBox}
                rows="5"
                cols="100"
                placeholder="Enter comment here..."
                onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button style={styles.submit} onClick={() => addComment(comment)}>
                Submit!
            </button>
        </div>
    );
}

export default CommentForm;