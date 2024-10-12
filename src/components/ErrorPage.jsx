import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ErrorPage = ({ status, message }) => {
    return (
        <>
            <h1 className="main-heading">
                { status } - { message }
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