import PropTypes from "prop-types";
import Comment from "./Comment.jsx";

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
            <Comment username={"Test Comment Username"} timestamp={"Test Timestamp"}>
                Test Comment Text
            </Comment>
        </>
    )
};

BlogPost.propTypes = {
    useAllData: PropTypes.func.isRequired,
    postId: PropTypes.number.isRequired
}

export default BlogPost;