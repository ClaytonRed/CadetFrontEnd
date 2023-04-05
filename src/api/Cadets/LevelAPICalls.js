import AbstractAPIClient from "../AbstractAPIClient";

class LevelAPICalls extends AbstractAPIClient {
    constructor() {
        super();
        this.baseURL = "http://localhost:3001/levels/";
    }

    async getAllLevels(token, queryParams = {}) {
        try {
            const url = `${this.baseURL}`;
            const config = {
                headers: { Authorization: `Bearer ${token}` },
                params: queryParams
            };
            const data = await this.fetchData(url, config);
            return data;
        } catch (error) {
            // Handle the error here
            console.error(error);
            throw error;
        }
    }

}

export default LevelAPICalls;