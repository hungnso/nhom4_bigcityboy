import React from "react";
import { Container, Row, Col } from "reactstrap";

function LoginSocial() {
  return (
    <div className="login_form">
      <div className="krqetT"></div>
      <div className="ifKAln"></div>
      <Container>
        <h1
          style={{
            color: "white",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Chào mừng bạn đến với App Cùng Đi Chơi
        </h1>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <div className="login_wrapper">
              <Row className="form_row">
                <Col>
                  <a href="#" className="btn btn-primary facebook">
                    <span>Login with Facebook</span>
                    <i className="fa fa-facebook"></i>{" "}
                  </a>
                </Col>
                <Col>
                  <a href="#" className="btn btn-primary google-plus">
                    Login with Google <i className="fa fa-google-plus"></i>
                  </a>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginSocial;
