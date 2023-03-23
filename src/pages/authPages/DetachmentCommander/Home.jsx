import React from 'react'
import { Accordion } from "react-bootstrap"

function Home() {

  const functionalityItems = [
    {
      title: "Timetable management",
      functionality: [
        "Create timetable",
        "View timetables",
        "Previous timetables",
      ]
    },
    {
      title: "Cadet management",
      functionality: [
        "Contact all cadets",
      ]
    },
    {
      title: "Lesson management",
      functionality: [
        "Schedule a lesson",
        "Edit a planned lesson",
      ]
    }
  ]

  return (
    <Accordion defaultActiveKey="0">
      {
        functionalityItems?.map((item, index) => {
          return <Accordion.Item eventKey={index}>
            <Accordion.Header>
              {item.title}
            </Accordion.Header>
            <Accordion.Body className="d-flex flex-column" style={{gap: "20px"}}>
              {item.functionality.map(item => {
                return <div className="functionalityItem p-2 rounded">{
                item}</div>
              })}
              </Accordion.Body>
          </Accordion.Item>
        })
}
    </Accordion>
  );
}

  


export default Home