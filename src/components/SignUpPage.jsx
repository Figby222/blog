import PropTypes from "prop-types";
import Form from "./Form.jsx";

const SignUpPage = ({ createAnAccount }) => {

    createAnAccount();
    return (
        <>
            <Form submitListener={() => {}} submitButtonText={"Submit"}>
                <label htmlFor="username" className="username">
                    Username
                    <input type="text" name="username" id="username" />
                </label>
                <label htmlFor="password" className="password">
                    Password
                    <input type="password" name="password" id="password" />
                </label>
                <label htmlFor="confirm-password" className="confirm-password">
                    Confirm Password
                    <input type="password" name="confirm_password" id="confirm-password" />
                </label>

            </Form>
        </>
    )
};

SignUpPage.propTypes = {
    createAnAccount: PropTypes.func.isRequired,
}

export default SignUpPage;