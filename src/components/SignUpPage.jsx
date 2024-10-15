import PropTypes from "prop-types";
import Form from "./Form.jsx";
import { useState } from "react";
import Errors from "./Errors.jsx"

const SignUpPage = ({ createAnAccount }) => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ errors, setErrors ] = useState([]);

    const handleFormSubmission = async (username, password, confirmPassword) => {
        const response = await createAnAccount(username, password, confirmPassword);
        
        response.errors && setErrors(response.errors);
    }

    return (
        <>
            <ul className="Errors">
                { errors && 
                    <Errors errors={errors} />
                }
            </ul>
            <Form submitListener={() => handleFormSubmission(username, password, confirmPassword)} submitButtonText={"Submit"}>
                <label htmlFor="username" className="username">
                    Username
                    <input type="text" name="username" id="username" 
                        value={username} onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label htmlFor="password" className="password">
                    Password
                    <input type="password" name="password" id="password" 
                        value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label htmlFor="confirm-password" className="confirm-password">
                    Confirm Password
                    <input type="password" name="confirm_password" id="confirm-password" 
                        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>

            </Form>
        </>
    )
};

SignUpPage.propTypes = {
    createAnAccount: PropTypes.func.isRequired,
}

export default SignUpPage;