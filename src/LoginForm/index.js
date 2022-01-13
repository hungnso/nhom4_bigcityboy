import { Container, Row, Col } from "reactstrap";
import InputForm from "../components/InputForm";

export default function LoginForm() {
  return (
    <div className="login_form">
      <div className="krqetT"></div>
      <div className="ifKAln"></div>
      <Container>
        <h1 style={{ color: "white", textTransform: "uppercase" }}>
          Chào mừng bạn đến với App Cùng Đi Chơi
        </h1>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <div className="login_wrapper">
              <div className="formsix-pos">
                <div className="form-group i-email">
                  <InputForm type="text" id="Text1" placeholder="Ho va Ten *" />
                </div>
              </div>
              <div className="formsix-e">
                <div className="form-group i-password">
                  <InputForm type="text" id="Text2" placeholder="Dia chi *" />
                </div>
              </div>

              <div className="login_btn_wrapper">
                <a href="#" className="btn btn-primary login_btn">
                  Submit
                </a>
              </div>
            </div>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Container>
    </div>
  );
}
