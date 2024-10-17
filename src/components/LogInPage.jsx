import PropTypes from "prop-types";

const LogInPage = ({ logInUser }) => {
    return (
        <>
            <label className="username" htmlFor="username">
                Username
                <input type="text" name="username" id="username" />
            </label>
            <label className="password" htmlFor="password">
                Password
                <input type="password" name="password" id="password" />
            </label>
        </>
    )
};

LogInPage.propTypes = {
    logInUser: PropTypes.func.isRequired
};

export default LogInPage;