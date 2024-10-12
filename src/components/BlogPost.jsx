import PropTypes from "prop-types";

const BlogPost = ({ useAllData, postId }) => {
    return(
        <>
            <h1 className="loading">Loading...</h1>
        </>
    )
};





BlogPost.propTypes = {
    useAllData: PropTypes.func.isRequired,
    postId: PropTypes.number.isRequired
}

export default BlogPost;