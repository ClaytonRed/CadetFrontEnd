import { Accordion, Button, Container, Form, Row, Col } from "react-bootstrap";
import LevelAPICalls from "../../API/Cadets/LevelAPICalls";
import SecretCodeAPICalls from "../../API/Cadets/SecretCodeAPICalls";
import { useEffect, useState } from "react";
import { getToken } from "../_utils";

function AdminView() {
    const [levels, setLevels] = useState([]);
    const [codes, setCodes] = useState([]);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const levelApi = new LevelAPICalls();
                const data = await levelApi.getAllLevels(getToken());
                setLevels(data);
                const secretCodesApi = new SecretCodeAPICalls();
                const secretCodes = await secretCodesApi.getAllCodes(getToken());
                setCodes(secretCodes);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async (levelId) => {
        try {
            console.log(`Submitting form for levelId: ${levelId}`);
            console.log(formData);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    return (
        <Container className="mt-5 mb-5">
            <h4>Admin Page</h4>
            <Accordion className="mt-3">
                <Accordion.Item eventKey="levels">
                    <Accordion.Header>Star levels</Accordion.Header>
                    <Accordion.Body>
                        {levels.map((level) => (
                            <Form
                                key={level._id}
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSubmit(level._id);
                                }}
                            >
                                <Row className="star-levels-admin">
                                    <Col>
                                        <Form.Group controlId={`levelName_${level._id}`}>
                                            <Form.Control
                                                type="text"
                                                name="level_name"
                                                value={formData.level_name || level.level_name}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xs="auto">
                                        <Button type="submit" variant="success" className="edit-button">
                                            Edit
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        ))}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion className="mt-3">
                <Accordion.Item eventKey="levels">
                    <Accordion.Header>Secret Codes</Accordion.Header>
                    <Accordion.Body>
                        {codes.map((code) => (
                            <Form
                                key={code._id}
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSubmit(code._id);
                                }}
                            >
                                <Row className="star-levels-admin">
                                    <Col>
                                        <Form.Group controlId={`codeName${code._id}`}>
                                            <Form.Control
                                                type="text"
                                                name="code"
                                                value={formData.code || code.code}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col xs="auto">
                                        <Button type="submit" variant="success" className="edit-button">
                                            Edit
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        ))}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}

export default AdminView;
