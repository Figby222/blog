import PropTypes from "prop-types";
import Form from "./Form";

const LogInPage = ({ logInUser }) => {

    logInUser();
    return (
        <>
            <Form submitListener={() => {}} submitButtonText={"Submit"}>
                <label className="username" htmlFor="username">
                    Username
                    <input type="text" name="username" id="username" />
                </label>
                <label className="password" htmlFor="password">
                    Password
                    <input type="password" name="password" id="password" />
                </label>
            </Form>
        </>
    )
};
LogInPage.propTypes = {
    logInUser: PropTypes.func.isRequired
};

export default LogInPage;