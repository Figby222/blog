import PropTypes from "prop-types";
import Comment from "./Comment.jsx";
import TextBox from "./TextBox.jsx";
import { useState } from "react";
import Form from "./Form.jsx";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "./Header.jsx";


const NewCommentForm = ({ postId, createComment, getBearerToken }) => {
    const [ textBoxValue, setTextBoxValue ] = useState("");

    const onSubmit = async (postId, textBoxValue) => {
        const bearerToken = getBearerToken();

        createComment(postId, textBoxValue, bearerToken);
    }
    return (
        <>
            <Form 
            submitListener={() => onSubmit(postId, textBoxValue)} 
            submitButtonText={"Comment"}>
                <TextBox label={""} placeholder={"New Comment..."} value={textBoxValue} onChange={setTextBoxValue} />
            </Form>
        </>
    )
}

NewCommentForm.propTypes = {
    postId: PropTypes.number.isRequired,
    createComment: PropTypes.func.isRequired,
    getBearerToken: PropTypes.func.isRequired,
}

const BlogPost = ({ useAllData, createComment, getBearerToken }) => {
    const { postId } = useParams();

    const { error, loading, data } = useAllData(postId);

    const [ submitError, setSubmitError ] = useState(false);

    const navigate = useNavigate();

    if(submitError) {
        throw submitError;
    }

    if(error) {
        throw error;
    }

    const links = [
        {
            name: "Blogs",
            path: "/blogs",
            isCurrentPage: false,
        },
        {
            name: "Sign Up",
            path: "/sign-up",
            isCurrentPage: false,
        },
        {
            name: "Log In",
            path: "/log-in",
            isCurrentPage: false,
        }
    ]

    const onCreateComment = async (postId, text, bearerToken) => {
        const response = await createComment(postId, text, bearerToken);

        if (response.error) {
            if (response.error.status === 401) {
                navigate("/log-in");
                return;
            }
            setSubmitError(response.error);
        }
    }

    return(
        <>
            <Header links={links} loggedInUser={null} />
            <main>
                <h1 className="blog-title">{ data && data.title || "Loading..." }</h1>
                <p className="blog-text">{ data && data.text || "Loading..."}</p>
                <p className="blog-creator">{ data && data.creator.username || "Loading..." }</p>
            </main>
            <section className="comments" aria-label="comments">
                <h2 className="comments-heading">Comments</h2>
                <NewCommentForm postId={parseInt(postId)} createComment={onCreateComment} getBearerToken={getBearerToken} />
                <ul className="comments-list">
                    { data && data.comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <Comment username={comment.creator.username} timestamp={comment.timestamp}>
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
    createComment: PropTypes.func.isRequired,
    getBearerToken: PropTypes.func.isRequired,
}

export default BlogPost;