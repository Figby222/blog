import PropTypes from "prop-types";

const Blogs = ({ useAllData }) => {
    const { error, loading, data } = useAllData();

    return (
        <>
        </>
    )
};

Blogs.PropTypes = {
    useAllData: PropTypes.func.isRequired
}

export default Blogs;