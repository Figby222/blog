import PropTypes from "prop-types";;;;

const Comment = ({ username, children, timestamp }) => {
    return (
        <>
            <h2 className="username"></h2>
        </>
    )
};

Comment.propTypes = {
    username: PropTypes.string,
    timestamp: PropTypes.string.isRequired
}


export default Comment