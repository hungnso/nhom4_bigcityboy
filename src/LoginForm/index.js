import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import InputForm from "../components/InputForm";
import { AuthContext } from "../Context/AuthProvider";
import { auth } from "../firebase/config";

export default function LoginForm() {
  const history = useHistory();
  const handleCLick = (e) => {
    e.preventDefault();
    history.push("/create");
  };
  const {
    user: { displayName },
  } = useContext(AuthContext);

  // if (!displayName) {
  //   return <Redirect to="/login" />;
  // }

  return (
    <div className="login_form">
      <div className="krqetT"></div>
      <div className="ifKAln"></div>
      <Container>
        <div className="logout">
          <button
            onClick={() => {
              auth.signOut();
            }}
            className="btn btn-primary logout_btn "
          >
            Logout
          </button>
        </div>
        <h1
          style={{
            color: "white",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Chào mừng {displayName} đến với App Cùng Đi Chơi
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
                <button
                  type="submit"
                  onClick={(e) => handleCLick(e)}
                  className="btn btn-primary login_btn"
                >
                  Submit
                </button>
              </div>
            </div>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Container>
    </div>
  );
}
