import AbstractAPIClient from "../AbstractAPIClient";

class PlannerAPICalls extends AbstractAPIClient {
    constructor() {
        super();
        this.baseURL = "http://localhost:3001/planner/";
    }

    async createNewPlan(token, planData) {
        try {
            const url = `${this.baseURL}`;
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            };
            const response = await this.postRequest(url, planData, config);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async getPlansForCadet(token, cadetId) {
        try {
            const url = `${this.baseURL}/cadet/${cadetId}`;
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

    async getOrganiserPlans(token, organiserId) {
        try {
            const url = `${this.baseURL}/organiser/${organiserId}`;
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

export default PlannerAPICalls;