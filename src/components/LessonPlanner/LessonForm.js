import SubjectAPICalls from "../../API/Cadets/SubjectAPICalls";
import LessonAPICalls from "../../API/Cadets/LessonAPICalls";
import LevelAPICalls from "../../API/Cadets/LevelAPICalls";
import UserAPICalls from "../../API/Cadets/UserAPICalls";
import PlannerAPICalls from "../../API/Cadets/PlannerAPICalls";
import { getToken, getName, getUserId } from "../_utils";
import { useState, useEffect } from "react";
import { Alert, Form, Spinner, Button } from "react-bootstrap";

function LessonForm({ date, onSubmit }) {
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [levels, setLevels] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [lessons, setLessons] = useState([]);
    const [cadets, setCadets] = useState([]);
    const [selectedCadets, setSelectedCadets] = useState([]);
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

    const fetchCadets = () => {
        try {
            const userApi = new UserAPICalls();
            const cadets = userApi.getAllCadets(getToken());
            setIsLoading(false);
            return cadets;
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
                const cadetData = await fetchCadets();
                setCadets(cadetData);
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

    const handleSelectedCadets = (e) => {
        const controlId = "cadets"; // Add the ID of the Form.Control element
        if (e.target.id !== controlId) {
            return;
        }

        const select = document.getElementById("cadets");
        const options = select.options;

        const newSelectedCadets = Array.from(options)
            .filter((option) => option.selected)
            .map((option) => option.value);

        // Add the "selected" class to the selected options
        Array.prototype.forEach.call(options, (option) => {
            if (newSelectedCadets.includes(option.value)) {
                option.classList.add("selected");
            }
        });

        setSelectedCadets((prevSelectedCadets) => {
            // Merge previously selected cadets with newly selected cadets
            const mergedCadets = [...prevSelectedCadets, ...newSelectedCadets];
            // Remove duplicates from the merged array
            const uniqueCadets = [...new Set(mergedCadets)];
            return uniqueCadets;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");

        const formData = e.target.elements;
        const selectedIds = selectedCadets.join(",");
        const plannerData = {
            organiserId: getUserId(),
            organiser: getName(),
            planDate: date,
            starLevel: formData.level.value,
            subject: formData.subject.value,
            lesson: formData.lesson.value,
            cadets: selectedIds,
            site: formData.site.value,
            notes: formData.notes.value
        };

        try {
            setIsLoading(true);
            const plannerApi = new PlannerAPICalls();
            await plannerApi.createNewPlan(getToken(), plannerData);
            setIsLoading(false);
            onSubmit("Form submitted successfully!");
        } catch (error) {
            setErrorMessage(error.response.data.message);
            setIsLoading(false);
        }
    };

    return (
        <>
            <br />
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
                        <Form.Control as="select" multiple value={selectedCadets.map((cadet) => cadet._id)} onChange={handleSelectedCadets}>
                            {cadets.map((cadet) => (
                                <option key={cadet._id} value={cadet._id}>
                                    {cadet.firstName + " " + cadet.surname}
                                </option>
                            ))}
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
                    <Button className="mt-3" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            )}
        </>
    );
}

export default LessonForm;