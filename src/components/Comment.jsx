import PropTypes from "prop-types";;;;

const Comment = ({ username, children, timestamp }) => {
    return (
        <>
            <h2 className="username">{ username }</h2>
            <p className="text">{ children }</p>
            <p className="timestamp">{ timestamp }</p>
        </>
    )
};

Comment.propTypes = {
    username: PropTypes.string,
    timestamp: PropTypes.string.isRequired
}




export default Comment