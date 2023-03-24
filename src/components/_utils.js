import jwt_decode from "jwt-decode";
import Cookie from "js-cookie";

// TODO: retrieve secret codes from the backend
// const codeArray = ["cadet", "detachment-commander", "parent", "officer", "cadet-nco"]

// export const verifySecretCode = (code) => {
//     if (codeArray.includes(code)) {
//         return true;
//     }

//     return false;
// }

export const getToken = () => {
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

export const isAdmin = () => {
    const token = Cookie.get("token");
    if (!token) return false;

    const decodedToken = jwt_decode(token);
    if (!decodedToken || Date.now() >= decodedToken.exp * 1000) {
        Cookie.remove("token");
        return false;
    }

    return decodedToken.isAdmin || false;
}

export const capitalize = (s) => {
    const capital = s.charAt(0).toUpperCase();
    const rest = s.slice(1);
    return capital + rest;
}