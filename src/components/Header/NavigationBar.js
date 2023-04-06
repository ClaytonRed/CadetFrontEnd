import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from './SiteLogo';
import Cookie from "js-cookie"
import { isAdmin, isDetachmentCommander } from "../_utils";

function NavigationBar({ isLoggedIn, setIsLoggedIn }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false);
        Cookie.remove("UserDetails");
        navigate('/login', { replace: true });
    };

    return (
        <Navbar expand="md" sticky="top" className="nav-container shadow p-2">
            <Logo />
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse>
                {isLoggedIn &&
                    <Nav>
                        <NavLink to="/" className="nav-link" exact="true">
                            Home
                        </NavLink>
                        {isLoggedIn && isDetachmentCommander() &&
                            <NavLink to="/lesson-planner" className="nav-link">
                                Lesson Planner
                            </NavLink>
                        }
                    </Nav>
                }
                <Nav className="ms-auto">
                    {isLoggedIn && isAdmin() &&
                        <NavLink to="/admin" className="nav-link">
                            Admin
                        </NavLink>
                    }
                    {isLoggedIn ? (
                        <>
                            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                        </>
                    ) : (
                        <>
                            <NavLink to="/register" className="nav-link">
                                Register
                            </NavLink>
                            <NavLink to="/login" className="nav-link">
                                Log In
                            </NavLink>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;