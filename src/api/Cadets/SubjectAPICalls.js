import AbstractAPIClient from "../AbstractAPIClient";

class SubjectAPICalls extends AbstractAPIClient {
    constructor() {
        super();
        this.baseURL = "https://cadet-project-backend.onrender.com/subjects/";
    }

    async getSubjectsForStarLevel(token, levelId) {
        try {
            const url = `${this.baseURL}${levelId}`;
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

    // async getSubjectsForStarLevel(token, queryParams = {}) {
    //     try {
    //         const url = `${this.baseURL}`;
    //         const config = {
    //             headers: { Authorization: `Bearer ${token}` },
    //             params: queryParams
    //         };
    //         const data = await this.fetchData(url, config);
    //         return data;
    //     } catch (error) {
    //         // Handle the error here
    //         console.error(error);
    //         throw error;
    //     }
    // }

    // async getTopFiveRatedEvents(token, queryParams = {}) {
    //     try {
    //         const url = `${this.baseURL}/top`;
    //         const config = {
    //             headers: { Authorization: `Bearer ${token}` },
    //             params: queryParams
    //         };
    //         const data = await this.fetchData(url, config);
    //         return data;
    //     } catch (error) {
    //         // Handle the error here
    //         console.error(error);
    //         throw error;
    //     }
    // }

    // async getEvent(token, eventId) {
    //     try {
    //         const url = `${this.baseURL}${eventId}`;
    //         const config = {
    //             headers: { Authorization: `Bearer ${token}` },
    //         };
    //         const response = await this.getRequest(url, config);
    //         return response.data;
    //     } catch (error) {
    //         // Handle the error here
    //         console.error(error);
    //         throw error;
    //     }
    // }

    // async createEvent(token, eventData) {
    //     try {
    //         const url = `${this.baseURL}`;
    //         const config = {
    //             headers: { Authorization: `Bearer ${token}` },
    //         };
    //         const response = await this.postRequest(url, eventData, config);
    //         return response.data;
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    // async updateEvent(token, eventId, eventData) {
    //     try {
    //         const url = `${this.baseURL}${eventId}`;
    //         const config = {
    //             headers: { Authorization: `Bearer ${token}` },
    //         };
    //         const response = await this.patchRequest(url, eventData, config);
    //         return response.data;
    //     } catch (error) {
    //         console.error(error);
    //         throw error;
    //     }
    // }

    // async deleteEvent(token, eventId) {
    //     try {
    //         const url = `${this.baseURL}${eventId}`;
    //         const config = {
    //             headers: { Authorization: `Bearer ${token}` },
    //         };
    //         const response = await this.deleteRequest(url, config);
    //         return response.data;
    //     } catch (error) {
    //         // Handle the error here
    //         console.error(error);
    //         throw error;
    //     }
    // }
}

export default SubjectAPICalls;