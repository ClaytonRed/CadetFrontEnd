import jwt_decode from "jwt-decode";
import Cookie from "js-cookie";

export const getToken = () => {
    const userDetailsString = Cookie.get("UserDetails");

    if (!userDetailsString) {
        return null;
    }

    const userDetails = JSON.parse(userDetailsString);

    if (userDetails && userDetails.token) {
        const decodedToken = jwt_decode(userDetails.token);
        if (decodedToken.exp * 1000 < Date.now()) {
            Cookie.remove("UserDetails");
            return null;
        } else {
            return userDetails.token;
        }
    }

    return null;
};

export const isAdmin = () => {
    const userDetailsString = Cookie.get("UserDetails");

    if (!userDetailsString) {
        return null;
    }

    const userDetails = JSON.parse(userDetailsString);

    if (userDetails && userDetails.user && userDetails.user.role === "Admin") {
        return true;
    }

    return false;
};

export const isDetachmentCommander = () => {
    const userDetailsString = Cookie.get("UserDetails");

    if (!userDetailsString) {
        return null;
    }

    const userDetails = JSON.parse(userDetailsString);

    if (userDetails && userDetails.user && userDetails.user.role === "Detachment Commander") {
        return true;
    }

    return false;
};

export const isCadet = () => {
    const userDetailsString = Cookie.get("UserDetails");

    if (!userDetailsString) {
        return null;
    }

    const userDetails = JSON.parse(userDetailsString);

    if (userDetails && userDetails.user && userDetails.user.role === "Cadet") {
        return true;
    }

    return false;
};

export const getName = () => {
    const userDetailsString = Cookie.get("UserDetails");

    if (!userDetailsString) {
        return null;
    }

    const userDetails = JSON.parse(userDetailsString);

    return userDetails.user.name;
};

export const getUserRole = () => {
    const userDetailsString = Cookie.get("UserDetails");

    if (!userDetailsString) {
        return null;
    }

    const userDetails = JSON.parse(userDetailsString);

    return userDetails.user.role;
};

export const getUserId = () => {
    const userDetailsString = Cookie.get("UserDetails");

    if (!userDetailsString) {
        return null;
    }

    const userDetails = JSON.parse(userDetailsString);

    return userDetails.user.user_id;
};

export const capitalize = (s) => {
    const capital = s.charAt(0).toUpperCase();
    const rest = s.slice(1);
    return capital + rest;
}