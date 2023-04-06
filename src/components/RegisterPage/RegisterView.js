import { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import AuthAPICalls from "../../API/Cadets/AuthAPICalls";
import { Spinner } from "react-bootstrap";  
import { useNavigate } from "react-router-dom";

function RegisterView({ setIsLoggedIn }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [surname, setSurname] = useState("");
    const [secretCode, setSecretCode] = useState("");
    const [errorMessages, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const authAPI = new AuthAPICalls();

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            setIsLoading(true);
            const registerData = { username, password, firstName, surname, secretCode };
            await authAPI.loginOrRegister(registerData, "register");

            setIsLoggedIn(true);
            navigate("/", { replace: true });
        } catch (error) {
            setErrorMessage(error.response.data.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container className="mt-5 mb-5 register-container">
            {isLoading ? (
                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <></>
            )}
            <h1 className="fw-bold">Register</h1>
            <p className="mt-3">
                If you do not have a secret code, contact the big C for one.
            </p>
            {errorMessages && <Alert variant="danger">{errorMessages}</Alert>}

            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First name:</Form.Label>
                    <Form.Control
                        type="text"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>Surname:</Form.Label>
                    <Form.Control
                        type="text"
                        value={surname}
                        onChange={(event) => setSurname(event.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId="code">
                    <Form.Label>
                        Secret code:
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
                <Button type="submit" className="brandedBtn fw-bold mt-3">
                    REGISTER
                </Button>
            </Form>
        </Container>
    );
}

export default RegisterView;
