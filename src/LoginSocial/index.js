import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import firebase, { auth } from '../firebase/config'
import { addDocument } from '../firebase/services'
const fbProvider = new firebase.auth.FacebookAuthProvider()
const googleProvider = new firebase.auth.GoogleAuthProvider()
function LoginSocial() {
  const handleLogin = async provider => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(provider)
    if (additionalUserInfo?.isNewUser && user) {
      addDocument('users', {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        providerId: additionalUserInfo.providerId
      })
    }
  }
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
          Chào mừng bạn đến với App Cùng Đi Chơi
        </h1>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <div className="login_wrapper">
              <Row className="form_row">
                <Col>
                  <button onClick={() => handleLogin(fbProvider)} className="btn btn-primary facebook">
                    Login with Facebook
                  </button>
                </Col>
                <Col>
                  <button onClick={() => handleLogin(googleProvider)} className="btn btn-primary google-plus">
                    Login with Google
                  </button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </div>
  )
}

export default LoginSocial
