import PropTypes from "prop-types";

const SignUpPage = ({ createAnAccount }) => {
    return (
        <>
            <p className="username">Username</p>
        </>
    )
};

SignUpPage.propTypes = {
    createAnAccount: PropTypes.func.isRequired,
}

export default SignUpPage;