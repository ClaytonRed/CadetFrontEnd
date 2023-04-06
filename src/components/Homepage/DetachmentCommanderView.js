import { Table, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { getToken, getUserId } from "../_utils";
import PlannerAPICalls from "../../API/Cadets/PlannerAPICalls";

function DetachmentCommanderView() {
    const [upcomingSchedules, setUpcomingSchedules] = useState([]);
    const [pastPlans, setPastPlans] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const plannerApi = new PlannerAPICalls();
                const plans = await plannerApi.getOrganiserPlans(getToken(), getUserId());
                const currentDate = new Date();
                const upcomingSchedules = plans.filter(plan => new Date(plan.planDate) > currentDate);
                const pastPlans = plans.filter(plan => new Date(plan.planDate) < currentDate);

                setUpcomingSchedules(upcomingSchedules);
                setPastPlans(pastPlans);
            } catch (error) {
                console.log(error);;
            }
        };
        fetchData();
    }, []);

    return (
        <Row className="planner-container">
            {upcomingSchedules.length > 0 ? (
                <React.Fragment>
                    <h4 className="mb-3 mt-3">Your Upcoming Schedule</h4>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th className="table-header">Date</th>
                                <th className="table-header">Level</th>
                                <th className="table-header">Subject</th>
                                <th className="table-header">Lesson</th>
                                <th className="table-header">Cadets</th>
                                <th className="table-header">Site</th>
                                <th className="table-header">Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {upcomingSchedules.map((plan) => (
                                <tr key={plan._id}>
                                    <td className="table-data">{new Date(plan.planDate).toLocaleDateString()}</td>
                                    <td className="table-data">{plan.starLevel.level_name}</td>
                                    <td className="table-data">{plan.subject.subject_name}</td>
                                    <td className="table-data">{plan.lesson.lesson_name}</td>
                                    <td className="table-data">
                                        {plan.cadets.map((cadet) => (
                                            <span key={cadet._id}>
                                                {cadet.firstName} {cadet.surname}
                                                {plan.cadets.indexOf(cadet) !== plan.cadets.length - 1 && " "}
                                            </span>
                                        ))}
                                    </td>
                                    <td className="table-data">{plan.site}</td>
                                    <td className="table-data">{plan.notes ? plan.notes : "N/A"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </React.Fragment>
            ) : (
                <h4 className="text-center mt-3">You have not organised a lesson yet</h4>
            )}
            {pastPlans.length > 0 ? (
                <React.Fragment>
                    <h4 className="mb-3 mt-3">Your Past Schedule</h4>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th className="table-header">Date</th>
                                <th className="table-header">Level</th>
                                <th className="table-header">Subject</th>
                                <th className="table-header">Lesson</th>
                                <th className="table-header">Cadets</th>
                                <th className="table-header">Site</th>
                                <th className="table-header">Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pastPlans.map((plan) => (
                                <tr key={plan._id}>
                                    <td className="table-data">{new Date(plan.planDate).toLocaleDateString()}</td>
                                    <td className="table-data">{plan.starLevel.level_name}</td>
                                    <td className="table-data">{plan.subject.subject_name}</td>
                                    <td className="table-data">{plan.lesson.lesson_name}</td>
                                    <td className="table-data">
                                        {plan.cadets.map((cadet) => (
                                            <span key={cadet._id}>
                                                {cadet.firstName} {cadet.surname}
                                                {plan.cadets.indexOf(cadet) !== plan.cadets.length - 1 && " "}
                                            </span>
                                        ))}
                                    </td>
                                    <td className="table-data">{plan.site}</td>
                                    <td className="table-data">{plan.notes ? plan.notes : "N/A"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </React.Fragment>
            ) : (
                <h4 className="text-center mt-3">Previous schedules not available</h4>
            )}
        </Row>
    )
}
export default DetachmentCommanderView;