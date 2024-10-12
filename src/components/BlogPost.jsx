import PropTypes from "prop-types";

const BlogPost = ({ useAllData, postId }) => {
    return(
        <>
            <h1 className="loading">Loading...</h1>
            <main>
                <h1 className="blog-title">Blog Title</h1>
                <p className="blog-text"></p>
            </main>
        </>
    )
};





BlogPost.propTypes = {
    useAllData: PropTypes.func.isRequired,
    postId: PropTypes.number.isRequired
}

export default BlogPost;