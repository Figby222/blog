import PropTypes from "prop-types";
import Form from "./Form";
import { useState } from "react";
import Errors from "./Errors.jsx";

const LogInPage = ({ logInUser }) => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ errors, setErrors ] = useState([]);

    const submitHandler = async (username, password) => {
        const response = logInUser(username, password);

        response.errors && setErrors(response.errors);
    }

    return (
        <>
            <Form submitListener={() => submitHandler(username, password)} submitButtonText={"Submit"}>
                <section className="errors">
                    <Errors errors={errors} />
                </section>
                <label className="username" htmlFor="username">
                    Username
                    <input type="text" name="username" id="username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label className="email" htmlFor="email">
                    Email
                    <input type="text" name="email" id="email" />
                </label>
                <label className="password" htmlFor="password">
                    Password
                    <input type="password" name="password" id="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
            </Form>
        </>
    )
};
LogInPage.propTypes = {
    logInUser: PropTypes.func.isRequired
};

export default LogInPage;