import PropTypes from "prop-types";

const Errors = ({ errors }) => {
    return (
        <>
            <p className="errors">{ errors[0].message }</p>
        </>
    )
};

Errors.propTypes = {
    errors: PropTypes.arrayOf(PropTypes.shape({
        message: PropTypes.string
    }))
}

export default Errors;