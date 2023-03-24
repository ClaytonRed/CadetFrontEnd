import AbstractAPIClient from "../AbstractAPIClient";
import Cookie from "js-cookie";

class AuthAPICalls extends AbstractAPIClient {
    constructor() {
        super();
        this.baseURL = "http://localhost:3001/auth/";
    }

    async loginOrRegister(data, operation) {
        try {
            const response = await this.postRequest(
                `${this.baseURL}${operation}`,
                data
            );

            const token = response.data.token;
            Cookie.set("token", token, { expires: 1 / 24, secure: true, sameSite: "strict" });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default AuthAPICalls;