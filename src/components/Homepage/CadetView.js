import { Table, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { getToken, getUserId } from "../_utils";
import PlannerAPICalls from "../../api/Cadets/PlannerAPICalls";

function CadetView() {
    const [upcomingPlans, setUpcomingPlans] = useState([]);
    const [pastPlans, setPastPlans] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const plannerApi = new PlannerAPICalls();
                const plans = await plannerApi.getPlansForCadet(getToken(), getUserId());

                // Get current date
                const currentDate = new Date();

                // Filter plans based on whether they are in the past or upcoming
                const upcomingPlans = plans.filter(plan => new Date(plan.planDate) > currentDate);
                const pastPlans = plans.filter(plan => new Date(plan.planDate) < currentDate);

                setUpcomingPlans(upcomingPlans);
                setPastPlans(pastPlans);
            } catch (error) {
                console.log(error);;
            }
        };
        fetchData();
    }, []);

  return (
      <Row className="planner-container">
          {upcomingPlans.length > 0 ? (
              <React.Fragment>
                  <h4 className="mb-3 mt-3">Your Upcoming Lessons</h4>
                  <Table striped bordered hover>
                      <thead>
                          <tr>
                              <th className="table-header">Organiser</th>
                              <th className="table-header">Date</th>
                              <th className="table-header">Level</th>
                              <th className="table-header">Subject</th>
                              <th className="table-header">Lesson</th>
                              <th className="table-header">Site</th>
                              <th className="table-header">Notes</th>
                          </tr>
                      </thead>
                      <tbody>
                          {upcomingPlans.map((plan) => (
                              <tr key={plan._id}>
                                  <td className="table-data">{plan.organiser}</td>
                                  <td className="table-data">{new Date(plan.planDate).toLocaleDateString()}</td>
                                  <td className="table-data">{plan.starLevel.level_name}</td>
                                  <td className="table-data">{plan.subject.subject_name}</td>
                                  <td className="table-data">{plan.lesson.lesson_name}</td>
                                  <td className="table-data">{plan.site}</td>
                                  <td className="table-data">{plan.notes ? plan.notes : "N/A"}</td>
                              </tr>
                          ))}
                      </tbody>
                  </Table>
              </React.Fragment>
          ) : (
              <h4 className="text-center mt-3">No upcoming lessons</h4>
          )}
          {pastPlans.length > 0 ? (
              <React.Fragment>
                  <h4 className="mb-3 mt-3">Your Past Lessons</h4>
                  <Table striped bordered hover>
                      <thead>
                          <tr>
                              <th className="table-header">Organiser</th>
                              <th className="table-header">Date</th>
                              <th className="table-header">Level</th>
                              <th className="table-header">Subject</th>
                              <th className="table-header">Lesson</th>
                              <th className="table-header">Site</th>
                              <th className="table-header">Notes</th>
                          </tr>
                      </thead>
                      <tbody>
                          {pastPlans.map((plan) => (
                              <tr key={plan._id}>
                                  <td className="table-data">{plan.organiser}</td>
                                  <td className="table-data">{new Date(plan.planDate).toLocaleDateString()}</td>
                                  <td className="table-data">{plan.starLevel.level_name}</td>
                                  <td className="table-data">{plan.subject.subject_name}</td>
                                  <td className="table-data">{plan.lesson.lesson_name}</td>
                                  <td className="table-data">{plan.site}</td>
                                  <td className="table-data">{plan.notes ? plan.notes : "N/A"}</td>
                              </tr>
                          ))}
                      </tbody>
                  </Table>
              </React.Fragment>
          ) : (
              <h4 className="text-center mt-3">No past lessons</h4>
          )}
      </Row>
  )
}
export default CadetView;