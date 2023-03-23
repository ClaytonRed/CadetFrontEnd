import React, { useState } from 'react'
import Calendar from "react-calendar"
import LessonForm from "../../components/LessonForm"

function LessonPlanner() {

    const [value, onChange] = useState("")


  return (
    <div className="p-4 rounded">
        {JSON.stringify(value)}
        <Calendar 
            onChange={onChange}
            value={value}
        />
        {
            value !== "" && 
                
            <LessonForm />}
    </div>
  )
}

export default LessonPlanner