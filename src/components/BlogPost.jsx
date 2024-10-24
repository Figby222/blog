import PropTypes from "prop-types";
import Comment from "./Comment.jsx";
import TextBox from "./TextBox.jsx";
import { useState } from "react";
import Form from "./Form.jsx";


const NewCommentForm = ({ postId, createComment }) => {
    const [ textBoxValue, setTextBoxValue ] = useState("");
    return (
        <>
            <Form 
            submitListener={() => createComment(postId, textBoxValue)} 
            submitButtonText={"Comment"}>
                <TextBox label={""} placeholder={"New Comment..."} value={textBoxValue} onChange={setTextBoxValue} />
            </Form>
        </>
    )
}

NewCommentForm.propTypes = {
    postId: PropTypes.number.isRequired,
    createComment: PropTypes.func.isRequired,
}

const BlogPost = ({ useAllData, postId, createComment }) => {
    const { error, loading, data } = useAllData();

    if(error) {
        return (<h1 className="error">An error has occurred</h1>)
    }

    return(
        <>
            <main>
                <h1 className="blog-title">{ data && data.title || "Loading..." }</h1>
                <p className="blog-text">{ data && data.text || "Loading..."}</p>
            </main>
            <section className="comments" aria-label="comments">
                <h2 className="comments-heading">Comments</h2>
                <NewCommentForm postId={postId} createComment={createComment} />
                <ul className="comments-list">
                    { data && data.comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <Comment username={comment.creator} timestamp={comment.timestamp}>
                                    { comment.text }
                                </Comment>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </>
    )
};

BlogPost.propTypes = {
    useAllData: PropTypes.func.isRequired,
    postId: PropTypes.number.isRequired,
    createComment: PropTypes.func.isRequired,
}

export default BlogPost;