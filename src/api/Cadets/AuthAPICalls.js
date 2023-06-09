import AbstractAPIClient from "../AbstractAPIClient";
import Cookie from "js-cookie";

class AuthAPICalls extends AbstractAPIClient {
    constructor() {
        super();
        this.baseURL = "https://cadet-project-backend.onrender.com/auth/";
    }

    async loginOrRegister(data, operation) {
        try {
            const response = await this.postRequest(
                `${this.baseURL}${operation}`,
                data
            );

            const userDetails = {
                token: response.data.token,
                user: response.data.user
            };
            const userDetailsString = JSON.stringify(userDetails);

            Cookie.set("UserDetails", userDetailsString, { expires: 1 / 24, secure: true, sameSite: "strict" });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default AuthAPICalls;