import PropTypes from "prop-types";

const ErrorPage = ({ status, message }) => {
    return (
        <>
            <h1 className="main-heading">
                { status } - { message }
            </h1>
        </>
    )
};

ErrorPage.propTypes = {
    status: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
};

export default ErrorPage;