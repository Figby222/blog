import PropTypes from "prop-types";

const BlogPost = ({ useAllData, postId }) => {
    const { error, loading, data } = useAllData();
    console.log(data);

    if (loading) {
        return (<h1 className="loading">Loading...</h1>)
    }

    if(error) {
        return (<h1 className="error">An error has occurred</h1>)
    }

    return(
        <>
            <main>
                <h1 className="blog-title">{ data && data.title }</h1>
                <p className="blog-text">{ data && data.text }</p>
            </main>
        </>
    )
};





BlogPost.propTypes = {
    useAllData: PropTypes.func.isRequired,
    postId: PropTypes.number.isRequired
}

export default BlogPost;