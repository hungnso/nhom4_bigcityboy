import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import InputForm from "../components/InputForm";

function GroupForm() {
  return (
    <div className="login_form">
      <div className="krqetT"></div>
      <div className="ifKAln"></div>
      <Container>
        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <div className="login_wrapper">
              <div className="formsix-pos">
                <div className="form-group i-email">
                  <InputForm type="text" id="Text1" placeholder="Tiêu đề *" />
                </div>
              </div>
              <div className="formsix-e">
                <div className="form-group i-password">
                  <InputForm type="text" id="Text2" placeholder="Nội dung *" />
                </div>
              </div>

              <div className="login_btn_wrapper" style={{ textAlign: "left" }}>
                <a href="#" className="btn btn-primary">
                  Thêm địa điểm
                </a>
              </div>

              <div className="address_vote">
                <Button color="danger" onClick={function noRefCheck() {}}>
                  Công viên Hòa Bình
                </Button>
                <Modal toggle={function noRefCheck() {}}>
                  <ModalHeader toggle={function noRefCheck() {}}>
                    Modal title
                  </ModalHeader>
                  <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={function noRefCheck() {}}>
                      Do Something
                    </Button>{" "}
                    <Button onClick={function noRefCheck() {}}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </div>

              <div className="login_btn_wrapper">
                <a href="#" className="btn btn-primary login_btn">
                  Create Group
                </a>
              </div>
            </div>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default GroupForm;
