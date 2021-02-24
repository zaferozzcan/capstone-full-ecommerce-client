import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

export default function Footer() {
  const footerStyle = {
    width: "100vw",
    height: "20vh",
    backgroundColor: "rgb(66, 66, 66)",
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
  };
  return (
    <div style={footerStyle}>
      <Container>
        <Row>
          <Col xs={12} s={12} md={4} lg={3}>
            About Us
          </Col>
          <Col xs={12} s={12} md={4} lg={3}>
            Career
          </Col>
          <Col xs={12} s={12} md={4} lg={3}>
            Produts
          </Col>
          <Col xs={12} s={12} md={4} lg={3}>
            Become Partner
          </Col>
        </Row>
      </Container>
    </div>
  );
}
