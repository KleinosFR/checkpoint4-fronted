import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

function Login({ setIsAuth }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = e => {
        e.preventDefault();
        axios
            .post(`${apiUrl}/login_check`, { username, password })
            .then(res => {
                const auth = res.data.authorisation;
                auth && setIsAuth(true);
            })
            .catch(err => {
                setIsAuth(false);
                console.log("todo error management", err);
            });
    };

    return (
        <Col xs={12} lg={4} className="offset-lg-4 my-lg-5">
            <form onSubmit={e => handleLogin(e)}>
                <FormGroup>
                    <Input
                        type="text"
                        name="text"
                        id="username"
                        placeholder="username"
                        onChange={e => setUsername(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </FormGroup>
                <Button color="secondary" type="submit">
                    Sign In
                </Button>
            </form>
        </Col>
    );
}

export default Login;
