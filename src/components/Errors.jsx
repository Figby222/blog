import PropTypes from "prop-types";

const Errors = ({ errors }) => {
    return (
        <>
            <p className="errors">Test Error Message</p>
        </>
    )
};

Errors.propTypes = {
    errors: PropTypes.arrayOf(PropTypes.shape({
        message: PropTypes.string
    }))
}

export default Errors;