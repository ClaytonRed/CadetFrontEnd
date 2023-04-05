import { Row, Col } from 'react-bootstrap';
import Image from "../../Assets/img/TDA.png"

function Footer() {
  return (
    <footer className="footer">
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <p>Copyright @ los-programadores-sin-techo-que-son-parlanchínes</p>
        </Col>
        <img src={
          Image
        } alt='the developer academy' />
      </Row>
    </footer>
  );
}

export default Footer;