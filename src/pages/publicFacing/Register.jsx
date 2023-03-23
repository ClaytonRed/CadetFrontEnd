import React from 'react'

// rename functions in Auth.js so you have one for logging in and one for registering
// make a form in this register file which has a username and password field 
// call function inside of Auth.js file and redirect the user to the login page when they have registered
// use Login.jsx as a reference 

import { useState } from "react";
import { Form, Button, Container, Alert, Spinner } from "react-bootstrap";
import AuthAPICalls from "../../api/Cadets/Auth";
import { useNavigate } from "react-router-dom";

function RegisterView() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secretCode, setSecretCode] = useState("")
  const [errorMessages, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const authAPI = new AuthAPICalls();

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const loginData = { username, password };
      await authAPI.Register(loginData, "login");
            navigate('/', { replace: true });
    } catch (error) {
        console.log(error)
      setErrorMessage("You done fuckrd up")
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="mt-5 login-container">
      {isLoading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <></>
      )}
      <h1>Register</h1>
      {errorMessages && <Alert variant="danger">{errorMessages}</Alert>}
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId="code">
          <Form.Label>
            Secret code
          </Form.Label>
          <Form.Control 
            type="password"
            value={secretCode}
            onChange={(e) => {
              setSecretCode(e.target.value)
            }}
            required
          />

        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default RegisterView