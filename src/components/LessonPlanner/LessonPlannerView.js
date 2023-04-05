import React, { useState } from 'react';
import Calendar from "react-calendar";
import LessonForm from "./LessonForm";

function LessonPlannerView() {
    const [date, setDate] = useState(new Date());
    const [showForm, setShowForm] = useState(false);
    const handleDateChange = (date) => {
        setDate(date);
        setShowForm(true);
    }

    return (
        <div className="p-4 rounded">
            <Calendar
                onChange={handleDateChange}
                value={date}
            />
            {showForm && <LessonForm date={date} />}
        </div>
    )
}

export default LessonPlannerView;