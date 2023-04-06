import AbstractAPIClient from "../AbstractAPIClient";

class UserAPICalls extends AbstractAPIClient {
    constructor() {
        super();
        this.baseURL = "http://localhost:3001/users/";
    }

    async getAllCadets(token) {
        try {
            const url = `${this.baseURL}cadets`;
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

export default UserAPICalls;