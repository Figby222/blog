import PropTypes from "prop-types";

const SignUpPage = ({ createAnAccount }) => {
    return (
        <>
            <label htmlFor="username" className="username">
                Username
                <input type="text" name="username" id="username" />
            </label>
        </>
    )
};

SignUpPage.propTypes = {
    createAnAccount: PropTypes.func.isRequired,
}


export default SignUpPage;