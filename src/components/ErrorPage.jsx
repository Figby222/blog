import PropTypes from "prop-types";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = ({ status, message }) => {
    const error = useRouteError();

    let errorStatus = status;
    let errorMessage = message;

    if (error && error.status != 404) {
        errorStatus = error.status;
        errorMessage = "You are not authorized to view this resource";
    }
    
    return (
        <>
            <h1 className="main-heading">
                { error ? 403 : status } - { errorMessage }
            </h1>
            <Link className="home-link" to="/">
                Home
            </Link>
        </>
    )
};

ErrorPage.defaultProps = {
    status: 404,
    message: "Not Found"
}

ErrorPage.propTypes = {
    status: PropTypes.number,
    message: PropTypes.string,
};


export default ErrorPage;