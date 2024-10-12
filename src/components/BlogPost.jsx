import PropTypes from "prop-types";

const BlogPost = ({ useAllData, postId }) => {
    return(
        <>
            <h1 className="loading">Loading...</h1>
            <h1 className="error">An error has occurred</h1>
            <main>
                <h1 className="blog-title">Blog Title</h1>
                <p className="blog-text">Blog Text</p>
            </main>
        </>
    )
};





BlogPost.propTypes = {
    useAllData: PropTypes.func.isRequired,
    postId: PropTypes.number.isRequired
}

export default BlogPost;