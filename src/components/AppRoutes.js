import { Route, Routes, Navigate } from 'react-router-dom';
import HomepageView from "./Homepage/HomepageView";
import LessonPlannerView from "./LessonPlanner/LessonPlannerView";
import CalenderView from "./CalendarPage/CalendarView";
import AdminView from "./AdminPage/AdminView";
import LoginView from "./LoginPage/LoginView";
import RegisterView from "./RegisterPage/RegisterView";
import { getToken } from './_utils';
import Footer from "../components/Footer/Footer"


function AppRoutes({ isLoggedIn, setIsLoggedIn, isAdmin }) {
    if (getToken()) {
        isLoggedIn = true;
    }

    return (
        <>
        <Routes>
        <Route path="/" element={isLoggedIn ? <HomepageView /> : <Navigate to="/login" />} />
            <Route path="/lesson-planner" element={<LessonPlannerView />} />
            <Route path="/calendar" element={isLoggedIn ? <CalenderView /> : <Navigate to="/login" />} />
            <Route path="/admin" element={isLoggedIn && isAdmin ? <AdminView /> : <Navigate to="/login" />} />
            <Route path="/login" element={<LoginView setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/register" element={<RegisterView setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
        <Footer />
        
        </>
    )
}

export default AppRoutes;