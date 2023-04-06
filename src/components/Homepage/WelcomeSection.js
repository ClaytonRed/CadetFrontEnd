import {Row, Col } from "react-bootstrap";
import { getUserRole, getName } from "../_utils"

function WelcomeSection() {
  return (
      <Row className="welcome-row">
          <Col>
              <h4>Welcome, {getName()}!</h4>
          </Col>
          <Col className="text-end">
              <small className="me-2">You are logged in as:</small>
              <strong>{getUserRole()}</strong>
          </Col>
      </Row>
  )
}

export default WelcomeSection