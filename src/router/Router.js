import { Routes, Route } from "react-router-dom"
import NavbarComponent from "../components/NavigationBar";
import Unauthorized from "../pages/publicFacing/UnauthorizedUser"
import { useState, useEffect } from "react"
import Home from "../pages/authPages/DetachmentCommander/Home"
import getToken from "../utils/getToken"
import LoginView from "../pages/publicFacing/Login";
import RegisterView from "../pages/publicFacing/Register";
import LessonPlanner from "../pages/authPages/LessonPlanner";

function Router() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        if (getToken()) {
            console.log(getToken())
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <>
            <NavbarComponent />
            <Routes>
                <Route index element={
                    isLoggedIn ? <Home /> : <LoginView setIsLoggedIn={setIsLoggedIn} />
                } />
                <Route path="login" element={<LoginView setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="register" element={<RegisterView />} />
                <Route path="lesson-planner" element={<LessonPlanner />} />
            </Routes>
        </>
    )
}

export default Router;