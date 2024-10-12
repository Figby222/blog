import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ErrorPage = ({ status, message }) => {
    return (
        <>
            <h1 className="main-heading">
                { status } - { message }
            </h1>
            <Link className="home-link" to="/"></Link>
        </>
    )
};

ErrorPage.propTypes = {
    status: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
};

export default ErrorPage;