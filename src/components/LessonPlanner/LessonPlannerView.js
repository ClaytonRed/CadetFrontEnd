import React, { useState } from 'react';
import Calendar from "react-calendar";
import LessonForm from "./LessonForm";
import { Container, Alert } from "react-bootstrap";

function LessonPlannerView() {
    const [date, setDate] = useState(new Date());
    const [showForm, setShowForm] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleDateChange = (date) => {
        setDate(date);
        setShowForm(true);
    }

    const handleFormSubmit = (message) => {
        setShowForm(false);
        setSuccessMessage(message);
        setTimeout(() => setSuccessMessage(false), 3000);
    }

    return (
        <div className="p-4 rounded">
            <Container className="mt-3">
                {successMessage && <Alert variant="success" onClose={() => setSuccessMessage(false)} dismissible>{successMessage}</Alert>}
                <Calendar
                    onChange={handleDateChange}
                    value={date}
                />
                {showForm && <LessonForm date={date} onSubmit={handleFormSubmit} />}
            </Container>
        </div>
    )
}

export default LessonPlannerView;