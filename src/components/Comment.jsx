import PropTypes from "prop-types";;;;

const Comment = ({ username, children, timestamp }) => {
    return (
        <>
            <h2 className="username">{ username }</h2>
            <p className="text">{ children }</p>
        </>
    )
};

Comment.propTypes = {
    username: PropTypes.string,
    timestamp: PropTypes.string.isRequired
}




export default Comment