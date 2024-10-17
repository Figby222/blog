import PropTypes from "prop-types";

const LogInPage = ({ logInUser }) => {
    return (
        <>
            <p className="username">Username</p>
        </>
    )
};

LogInPage.propTypes = {
    logInUser: PropTypes.func.isRequired
};

export default LogInPage;