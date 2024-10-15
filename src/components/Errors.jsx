import PropTypes from "prop-types";

const Errors = ({ errors }) => {
    return (
        <>
        </>
    )
};

Errors.propTypes = {
    errors: PropTypes.arrayOf(PropTypes.shape({
        message: PropTypes.string
    }))
}

export default Errors;