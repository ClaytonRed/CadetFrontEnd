import { Route, Routes, Navigate } from 'react-router-dom';
import HomepageView from "./Homepage/HomepageView";
import LessonPlannerView from "./LessonPlanner/LessonPlannerView";
import AdminView from "./AdminPage/AdminView";
import LoginView from "./LoginPage/LoginView";
import RegisterView from "./RegisterPage/RegisterView";
import { getToken, isAdmin, isDetachmentCommander } from './_utils';
import Footer from "../components/Footer/Footer"

function AppRoutes({ isLoggedIn, setIsLoggedIn}) {
    if (getToken()) {
        isLoggedIn = true;
    }

    return (
        <>
            <Routes>
                <Route path="/" element={isLoggedIn ? <HomepageView /> : <Navigate to="/login" />} />
                <Route path="/lesson-planner" element={isLoggedIn && isDetachmentCommander() ? <LessonPlannerView /> : <Navigate to="/login" />} />
                <Route path="/admin" element={isLoggedIn && isAdmin() ? <AdminView /> : <Navigate to="/login" />} />
                <Route path="/login" element={<LoginView setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/register" element={<RegisterView setIsLoggedIn={setIsLoggedIn} />} />
            </Routes>
            <Footer />
        </>
    )
}

export default AppRoutes;