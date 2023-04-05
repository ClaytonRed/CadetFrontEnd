import AbstractAPIClient from "../AbstractAPIClient";

class SubjectAPICalls extends AbstractAPIClient {
    constructor() {
        super();
        this.baseURL = "http://localhost:3001/lessons/";
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

export default SubjectAPICalls;