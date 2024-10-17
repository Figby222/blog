import PropTypes from "prop-types";
import Form from "./Form";
import { useState } from "react";

const LogInPage = ({ logInUser }) => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    return (
        <>
            <Form submitListener={() => logInUser(username, password)} submitButtonText={"Submit"}>
                <label className="username" htmlFor="username">
                    Username
                    <input type="text" name="username" id="username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
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