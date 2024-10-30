import PropTypes from "prop-types";;;;

const Comment = ({ username, children, timestamp }) => {
    return (
        <>
            <h2 className="comment-username">{ username }</h2>
            <p className="comment-text">{ children }</p>
            <p className="comment-timestamp">{ timestamp }</p>
        </>
    )
};

Comment.propTypes = {
    username: PropTypes.string,
    timestamp: PropTypes.string.isRequired
}




export default Comment