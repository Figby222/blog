import PropTypes from "prop-types";

const Blogs = ({ useAllData }) => {
    const { error, loading, data } = useAllData();

    if (loading) {
        return <h1 className="loading">Loading...</h1>
    }

    return (
        <>
            <h2 className="blog-title">Test Blog Title</h2>
        </>
    )
};


Blogs.propTypes = {
    useAllData: PropTypes.func.isRequired
}

export default Blogs;