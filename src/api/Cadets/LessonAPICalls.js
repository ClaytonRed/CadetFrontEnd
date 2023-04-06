import AbstractAPIClient from "../AbstractAPIClient";

class LessonAPICalls extends AbstractAPIClient {
    constructor() {
        super();
        this.baseURL = "https://cadet-project-backend.onrender.com/lessons/";
    }

    async getLessonsForSubject(token, subjectId) {
        try {
            const url = `${this.baseURL}${subjectId}`;
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            };
            const response = await this.getRequest(url, config);
            return response.data;
        } catch (error) {
            // Handle the error here
            console.error(error);
            throw error;
        }
    }
}

export default LessonAPICalls;