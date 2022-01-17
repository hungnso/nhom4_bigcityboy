import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { Container, Row, Col, Button } from 'reactstrap'
import InputForm from '../components/InputForm'
import { AuthContext } from '../Context/AuthProvider'
import { auth } from '../firebase/config'
import { addDocument } from '../firebase/services'
import Mapbox from '../MapAddAddress/mapbox'
import ModalForm from '../components/ModalForm'

export default function LoginForm() {
  let navigate = useNavigate()

  const [show, setShow] = useState(false)

  const handleCLick = e => {
    e.preventDefault()
    navigate('/create')
  }
  const {
    user: { displayName, uid }
  } = useContext(AuthContext)

  return (
    <div className="login_form">
      <div className="krqetT"></div>
      <div className="ifKAln"></div>
      <Container>
        <h1
          style={{
            color: 'white',
            textTransform: 'uppercase',
            textAlign: 'center'
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
                  <div className="address_vote">
                    <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => setShow(true)}>
                      Địa Chỉ
                    </button>
                    <ModalForm
                      show={show}
                      onHide={() => setShow(false)}
                      ModalTile={''}
                      ModalChildren={<Mapbox />}
                      size="xl"
                    />
                  </div>
                </div>
              </div>

              <div className="login_btn_wrapper">
                <button type="submit" onClick={e => handleCLick(e)} className="btn btn-primary login_btn">
                  Submit
                </button>
              </div>
            </div>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Container>
    </div>
  )
}
