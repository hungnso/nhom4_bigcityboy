import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import ModalForm from '../components/ModalForm'
import InputForm from '../components/InputForm'
import './styles.css'

function Home() {
  const [show, setShow] = useState(false)
  const [showList, setShowList] = useState(false)
  const [showVote, setShowVote] = useState(false)

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
          <Col lg={3}></Col>
          <Col lg={6}>
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
                    <button onClick={() => setShow(true)}>
                      <img className="icon_zoom" src={'http://cdn.onlinewebfonts.com/svg/img_356964.png'} />
                      <span>Vào Phòng Sẵn Có</span>
                    </button>
                    <ModalForm
                      show={show}
                      onHide={() => setShow(false)}
                      ModalTile={'Bạn có mã phòng bình chọn?'}
                      ModalChildren={
                        <div>
                          <p>Để tham gia cuộc bình chọn, hãy nhập mã phòng do người tổ chức cung cấp **</p>
                          <InputForm placeholder="Nhập mã tại đây *" />
                          <button className="btn_tg">Tham Gia</button>
                        </div>
                      }
                      size="lg"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="home_item">
                    <button onClick={() => setShowList(true)}>
                      <img className="icon_zoom" src={'http://cdn.onlinewebfonts.com/svg/img_82026.png'} />
                      <span>Cuộc Bình Chọn Của Bạn</span>
                    </button>
                    <ModalForm
                      show={showList}
                      onHide={() => setShowList(false)}
                      ModalTile={'Cuộc Bình Chọn Của Bạn!!!'}
                      ModalChildren={
                        <div>
                          <button className="btn_address">Đi Chơi SaPa</button>
                          <button className="btn_address">Đi Xem Phim</button>
                          <button className="btn_address">Đi Lăng Bác</button>
                        </div>
                      }
                      size="lg"
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <div className="home_item">
                    <button onClick={() => setShowVote(true)}>
                      <img
                        className="icon_zoom"
                        src={'https://hocvienagile.com/wp-content/uploads/2021/03/icon-dien-gia-300x300.png'}
                      />
                      <span>Cuộc Bình Chọn Tham Gia</span>
                    </button>
                    <ModalForm
                      show={showVote}
                      onHide={() => setShowVote(false)}
                      ModalTile={'Cuộc Bình Chọn Đã Tham Gia!!!'}
                      ModalChildren={
                        <div>
                          <button className="btn_address">Đi Chơi SaPa</button>
                          <button className="btn_address">Đi Xem Phim</button>
                          <button className="btn_address">Đi Lăng Bác</button>
                        </div>
                      }
                      size="lg"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
