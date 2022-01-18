import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import './styles.css'

function Home() {
  const navigate = useNavigate()
  const handleCLick = e => {
    e.preventDefault()
    navigate('/contact')
  }
  return (
    <div className="login_form">
      <div className="krqetT"></div>
      <div className="ifKAln"></div>
      <Container>
        <Row>
          <Col md={3}></Col>
          <Col md={6}>
            <div className="home_body">
              <Row>
                <Col md={6}>
                  <div className="home_item">
                    <button onClick={e => handleCLick(e)}>
                      <img className="icon_zoom" src={'https://cdn-icons-png.flaticon.com/512/1672/1672402.png'} />
                      <span>Cuộc Bình Chọn Mới</span>
                    </button>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="home_item">
                    <button>
                      <img className="icon_zoom" src={'http://cdn.onlinewebfonts.com/svg/img_356964.png'} />
                      <span>Vào Phòng Sẵn Có</span>
                    </button>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="home_item">
                    <button>
                      <img className="icon_zoom" src={'http://cdn.onlinewebfonts.com/svg/img_82026.png'} />
                      <span>Cuộc Bình Chọn Của Bạn</span>
                    </button>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="home_item">
                    <button>
                      <img
                        className="icon_zoom"
                        src={'https://hocvienagile.com/wp-content/uploads/2021/03/icon-dien-gia-300x300.png'}
                      />
                      <span>Cuộc Bình Chọn Tham Gia</span>
                    </button>
                  </div>
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

export default Home
