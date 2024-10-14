import PropTypes from "prop-types";

const Blogs = ({ useAllData }) => {
    const { error, loading, data } = useAllData();

    if (loading) {
        return <h1 className="loading">Loading...</h1>
    }

    return (
        <>
        </>
    )
};


Blogs.PropTypes = {
    useAllData: PropTypes.func.isRequired
}

export default Blogs;