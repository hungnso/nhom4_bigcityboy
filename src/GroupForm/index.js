import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import InputForm from "../components/InputForm";
import ModalForm from "../components/ModalForm";

import { useHistory } from "react-router-dom";
import Mapbox from "../MapAddAddress/mapbox";

function GroupForm() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);


  const handleCLick = (e) => {
    e.preventDefault();
    history.push("/room-vote");
  };
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
                <a href="#" className="btn btn-primary" onClick={() => setShows(true)}>
                  Thêm địa điểm
                </a>
                <ModalForm
                  show={shows}
                  onHide={() => setShows(false)}
                  ModalTile={""}
                  ModalChildren={<Mapbox/>}
                  size= "xl"
                />
                
              </div>

              <div className="address_vote">
                <Button onClick={() => setShow(true)}>
                  số 2 Hùng Vương, Điện Bàn, Ba Đình, Hà Nội
                </Button>
                <ModalForm
                  show={show}
                  onHide={() => setShow(false)}
                  ModalTile={"số 2 Hùng Vương, Điện Bàn, Ba Đình, Hà Nội"}
                  ModalChildren={<Mapbox/>}
                  size= "xl"
                />
              </div>

              <div className="login_btn_wrapper">
                <button
                  type="submit"
                  onClick={(e) => handleCLick(e)}
                  className="btn btn-primary login_btn"
                >
                  CREATE GROUP
                </button>
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
