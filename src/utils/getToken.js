import Cookie from "js-cookie";
import jwt_decode from "jwt-decode";

export default function getToken () {
    const token = Cookie.get("token");

    if (token) {
        const decodedToken = jwt_decode(token);
        if (decodedToken.exp * 1000 < Date.now()) {
            Cookie.remove("token");
            return null;
        } else {
            return token;
        }
    }

    return null;
};
