import PropTypes from "prop-types";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = ({ status, message }) => {
    const error = useRouteError();

    let errorStatus = status;
    let errorMessage = message;

    if (error) {
        errorStatus = error.status;
        errorMessage = 
            error.status === 403 ?
                "You are not authorized to view this resource" :
            error.status === 404 ?
                "Target resource not found" :
                "An error has occurred"
    }
    
    return (
        <>
            <h1 className="main-heading">
                { errorStatus } - { errorMessage }
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