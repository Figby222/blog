import PropTypes from "prop-types";
import Comment from "./Comment.jsx";
import TextBox from "./TextBox.jsx";

const BlogPost = ({ useAllData, postId }) => {
    const { error, loading, data } = useAllData();
    console.log(data);

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
                <TextBox label={""} placeholder={"New Comment..."} value={""} onChange={() => {}} />
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
    postId: PropTypes.number.isRequired
}

export default BlogPost;