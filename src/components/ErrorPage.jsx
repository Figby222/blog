import PropTypes from "prop-types";

const ErrorPage = ({ status, message }) => {
    return (
        <>
        </>
    )
};

ErrorPage.propTypes = {
    status: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
};

export default ErrorPage;