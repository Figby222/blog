import PropTypes from "prop-types";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = ({ status, message }) => {
    const error = useRouteError();
    return (
        <>
            <h1 className="main-heading">
                { error.status } - { error.message }
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