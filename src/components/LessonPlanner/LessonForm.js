import SubjectAPICalls from "../../API/Cadets/SubjectAPICalls";
import LessonAPICalls from "../../API/Cadets/LessonAPICalls";
import LevelAPICalls from "../../API/Cadets/LevelAPICalls";
import { getToken } from "../_utils";
import React, { useState, useEffect } from "react";
import { Container, Alert, Form, Spinner, Button } from "react-bootstrap";

function LessonForm({ date }) {
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [levels, setLevels] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [lessons, setLessons] = useState([]);
    const [cadets, setCadets] = useState([]);
    const [site, setSite] = useState("");
    const [notes, setNotes] = useState("");

    const fetchSubjects = (level) => {
        try {
            const subjectApi = new SubjectAPICalls();
            const subjectData = subjectApi.getSubjectsForStarLevel(getToken(), level);
            setIsLoading(false);
            return subjectData;
        } catch (error) {
            setErrorMessage(error.response.data.message);
            setIsLoading(false);
        }
    };

    const fetchLessons = (subject) => {
        try {
            const lessonApi = new LessonAPICalls();
            const lessonData = lessonApi.getLessonsForSubject(getToken(), subject);
            setIsLoading(false);
            return lessonData;
        } catch (error) {
            setErrorMessage(error.response.data.message);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const levelApi = new LevelAPICalls();
                const data = await levelApi.getAllLevels(getToken());
                setLevels(data);
                const subjectData = await fetchSubjects(data[0]._id);
                setSubjects(subjectData);
                const lessonData = await fetchLessons(subjectData[0]._id);
                setLessons(lessonData);
            } catch (error) {
                setErrorMessage(error.response.data.message);
            }
        };
        fetchData();
    }, []);


    const handleLevelChange = async (e) => {
        setIsLoading(true);
        const level = e.target.value;
        const subjectData = await fetchSubjects(level);
        setSubjects(subjectData);
        const lessonData = await fetchLessons(subjectData[0]._id);
        setLessons(lessonData);
    };

    const handleSubjectChange = async (e) => {
        setIsLoading(true);
        const subject = e.target.value;
        const lessonData = await fetchLessons(subject);
        setLessons(lessonData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // const lessonData = {
        //     date,
        //     level,
        //     subject,
        //     lesson,
        //     cadets,
        //     site,
        //     notes
        // };
        // TODO: Add lessonData to the database
        // setLevels([]);
        // setSubject("");
        // setLesson("");
        // setCadets([]);
        // setSite("");
        // setNotes("");
    };

    return (
        <Container className="mt-3">
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            {isLoading ? (
                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="level">
                        <Form.Label>Level:</Form.Label>
                        <Form.Control as="select" onChange={handleLevelChange}>
                            {levels.map((level) => (
                                <option key={level._id} value={level._id}>{level.level_name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="subject">
                        <Form.Label>Subject:</Form.Label>
                        <Form.Control as="select" onChange={handleSubjectChange}>
                            {subjects.map((subject) => (
                                <option key={subject._id} value={subject._id}>{subject.subject_name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="lesson">
                        <Form.Label>Lesson:</Form.Label>
                        <Form.Control as="select">
                            {lessons.map((lesson) => (
                                <option key={lesson._id} value={lesson._id}>{lesson.lesson_name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="cadets">
                        <Form.Label>Cadets to add:</Form.Label>
                        <Form.Control as="select" multiple value={cadets} onChange={(e) => setCadets(Array.from(e.target.selectedOptions, (option) => option.value))}>
                            {/* TODO: Add options based on database */}
                            <option value="cadet1">Cadet 1</option>
                            <option value="cadet2">Cadet 2</option>
                            <option value="cadet3">Cadet 3</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="site">
                        <Form.Label>Site:</Form.Label>
                        <Form.Control type="text" value={site} onChange={(e) => setSite(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="notes">
                        <Form.Label>Notes:</Form.Label>
                        <Form.Control as="textarea" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            )}
        </Container>
    );
}

export default LessonForm;