import PropTypes from "prop-types";

const Blogs = ({ useAllData }) => {
    const { error, loading, data } = useAllData();

    if (loading) {
        return <h1 className="loading">Loading...</h1>
    }

    return (
        <>
        {
            data &&
            <>
            <p className="username">Test Blog Username</p>
            <h2 className="blog-title">{ data.blogs[0].title }</h2>
            </>

        }
        </>
    )
};


Blogs.propTypes = {
    useAllData: PropTypes.func.isRequired
}

export default Blogs;