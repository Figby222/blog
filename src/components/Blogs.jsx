import PropTypes from "prop-types";

const Blogs = ({ useAllData }) => {
    const { error, loading, data } = useAllData();

    return (
        <>
            <h1 className="loading">Loading...</h1>
        </>
    )
};


Blogs.PropTypes = {
    useAllData: PropTypes.func.isRequired
}

export default Blogs;