// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from "react-router-dom"
// import Logo from "../media/logo-with-bg.png"

// function NavbarComponent() {
//   return (
//     <Navbar collapseOnSelect expand="lg" className='darkGreenBg justify-content-between' style={{
//       width: "100%",
//       height: "100px"
//     }}>
//       <Container 
//       className="fuckYouMargin"
//       >
//         <Navbar.Brand to="#home">
//           <img src={Logo} alt="logo" className='logoResize'/>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto d-flex justify-content-between" style={{
//             gap: "15px",
//           }}>
//             <Link to="#features" className='whiteText fw-bold text-decoration-none'>Dummy-Text</Link>
//             <Link to="#features" className='whiteText fw-bold text-decoration-none'>Dummy-Text</Link>
//             <Link to="#features" className='whiteText fw-bold text-decoration-none'>Dummy-Text</Link>
//           </Nav>
//           <Nav className="d-flex loginBtns" style={{
//             gap: "15px"
//           }}>
//             <Link to="#deets" className='whiteText text-decoration-none fw-bold'>Log In</Link>
//             <Link eventKey={2} to="#memes" className='whiteText text-decoration-none fw-bold'>
//               Register
//             </Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavbarComponent;