import PropTypes from "prop-types";

const SignUpPage = ({ createAnAccount }) => {
    return (
        <>
            <label htmlFor="username" className="username">
                Username
                <input type="text" name="username" id="username" />
            </label>
            <label htmlFor="password" className="password">
                Password
                <input type="password" name="password" id="password" />
            </label>
        </>
    )
};

SignUpPage.propTypes = {
    createAnAccount: PropTypes.func.isRequired,
}


export default SignUpPage;