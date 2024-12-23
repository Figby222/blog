import PropTypes from "prop-types";
import Form from "./Form";
import { useState } from "react";
import Errors from "./Errors.jsx";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header.jsx";
import "../styles/LogInPage.css";

const LogInPage = ({ logInUser, storeBearerToken }) => {
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ errors, setErrors ] = useState([]);

    const navigate = useNavigate();

    const submitHandler = async (e, username, email, password) => {
        e.preventDefault();

        const response = await logInUser(username, email, password);

        response.errors && setErrors(response.errors);

        console.log(response);

        if(response.token) {
            storeBearerToken(response.token);
            navigate("/");
        }
    }

    const links = [
        {
            name: "Blogs",
            path: "/",
            isCurrentPage: false,
        },
        {
            name: "Sign Up",
            path: "/sign-up",
            isCurrentPage: false,
        },
        {
            name: "Log In",
            path: "/log-in",
            isCurrentPage: true,
        }
    ]

    return (
        <>
            <Header links={links} loggedInUser={null} />
            <main className="LogInPage-main">
                <form className="LogInPage-form" onSubmit={(e) => submitHandler(e, username, email, password)}>
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
                        <input type="text" name="email" id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label className="password" htmlFor="password">
                        Password
                        <input type="password" name="password" id="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <button type="submit" className="LogInPage-submit">Submit</button>
                </form>
            </main>
        </>
    )
};
LogInPage.propTypes = {
    logInUser: PropTypes.func.isRequired,
    storeBearerToken: PropTypes.func.isRequired,
};

export default LogInPage;