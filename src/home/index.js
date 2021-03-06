import React, { useContext, useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import ModalForm from '../components/ModalForm'
import InputForm from '../components/InputForm'
import './styles.css'
import { AppContext } from '../Context/AppProvider'
import { db } from '../firebase/config'
import { AuthContext } from '../Context/AuthProvider'
import useCurrAdd from '../hooks/useCurrAdd'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import LogOut from '../components/LogOut'
function Home() {
  const {
    user: { uid, displayName }
  } = useContext(AuthContext)
  const [show, setShow] = useState(false)
  const [showList, setShowList] = useState(false)
  const [showVote, setShowVote] = useState(false)
  const { roomClient, roomHost, setSelectedRoomId, selectedRoomHost, selectedRoomClient } = useContext(AppContext)

  // const listRoomClient = roomClient.map(room => {
  //   room.member.filter(value => value !== uid)
  // })

  // console.log(listRoomClient.length)

  const navigate = useNavigate()
  const handleCLick = e => {
    e.preventDefault()
    navigate('/contact')
  }

  const conditionHost = React.useMemo(() => {
    return {
      fieldName: 'room_id',
      operator: '==',
      compareValue: selectedRoomHost.id
    }
  }, [selectedRoomHost.id])
  const conditonUser = React.useMemo(() => {
    return {
      fieldName: 'user_id',
      operator: '==',
      compareValue: uid
    }
  }, [uid])

  const conditionClient = React.useMemo(() => {
    return {
      fieldName: 'room_id',
      operator: '==',
      compareValue: selectedRoomClient.id
    }
  }, [selectedRoomClient.id])

  const currAddHost = useCurrAdd('user_room', conditionHost, conditonUser)
  const currAddClient = useCurrAdd('user_room', conditionClient, conditonUser)

  React.useEffect(() => {
    // console.log(currAddHost)
  }, [currAddHost])
  React.useEffect(() => {
    console.log(currAddClient)
  }, [currAddClient])

  const handleJoinRoom = value => {
    console.log(value)
    setSelectedRoomId(value)
    // localStorage.setItem('roomId', value)
    navigate(`/room-vote/${value}`)
  }
  const formik = useFormik({
    initialValues: {
      content: ''
    },
    validationSchema: Yup.object({
      content: Yup.string()
        .min(2, 'N???i Dung Ph???i Ch???a ??t Nh???t 2 K?? T???')
        .max(30, 'N???i Dung T???i ??a 512 K?? T???')
        .required('N???i Dung Kh??ng ???????c ????? Tr???ng!')
    }),
    onSubmit: values => {
      const clickRoom = db.collection('rooms').doc(values.content)
      // alert(JSON.stringify(values, null, 2))
      clickRoom.get().then(doc => {
        if (doc.exists) {
          console.log('Document data:', doc.data())
          const { member } = doc.data()
          if (!member.includes(uid)) {
            clickRoom.update({
              member: [...member, uid]
            })
          }

          setSelectedRoomId(values.content)

          navigate(`/room-vote/${values.content}`)
        } else {
          // doc.data() will be undefined in this case
          alert('Ph??ng n??y kh??ng t???n t???i')
        }
      })
    }
  })

  return (
    <div className="login_form">
      <div className="krqetT"></div>
      <div className="ifKAln"></div>
      <LogOut />
      <Container>
        <h1
          style={{
            color: 'white',
            textTransform: 'uppercase',
            textAlign: 'center'
          }}
        >
          Ch??o m???ng {displayName} ?????n v???i App C??ng ??i Ch??i
        </h1>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <div className="home_body">
              <Row>
                <Col md={6}>
                  <div className="home_item">
                    <button onClick={e => handleCLick(e)}>
                      <img className="icon_zoom" src={'https://cdn-icons-png.flaticon.com/512/1672/1672402.png'} />
                      <span>Cu???c B??nh Ch???n M???i</span>
                    </button>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="home_item">
                    <button
                      onClick={e => {
                        setShow(true)
                      }}
                    >
                      <img className="icon_zoom" src={'http://cdn.onlinewebfonts.com/svg/img_356964.png'} />
                      <span>V??o Ph??ng S???n C??</span>
                    </button>
                    <ModalForm
                      show={show}
                      onHide={() => setShow(false)}
                      ModalTile={'B???n c?? m?? ph??ng b??nh ch???n?'}
                      ModalChildren={
                        <div>
                          <p>????? tham gia cu???c b??nh ch???n, h??y nh???p m?? ph??ng do ng?????i t??? ch???c cung c???p **</p>
                          <form onSubmit={formik.handleSubmit}>
                            <InputForm
                              type="text"
                              id="Text1"
                              placeholder="Nh???p m?? t???i ????y"
                              name="content"
                              defaultValue={formik.values.content}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            {formik.errors.content && formik.touched.content && (
                              <p className="msg_err">{formik.errors.content}</p>
                            )}
                            <button type="submit" className="btn_tg" disabled={!(formik.isValid && formik.dirty)}>
                              Tham Gia
                            </button>
                          </form>
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
                      <span>Cu???c B??nh Ch???n C???a B???n</span>
                    </button>
                    <ModalForm
                      show={showList}
                      onHide={() => setShowList(false)}
                      ModalTile={'Cu???c B??nh Ch???n C???a B???n!!!'}
                      ModalChildren={
                        <div>
                          {roomHost.map(room => (
                            <button key={room.id} className="btn_address" onClick={() => handleJoinRoom(room.id)}>
                              {room.title}
                            </button>
                          ))}
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
                      <span>Cu???c B??nh Ch???n Tham Gia</span>
                    </button>
                    <ModalForm
                      show={showVote}
                      onHide={() => setShowVote(false)}
                      ModalTile={'Cu???c B??nh Ch???n ???? Tham Gia!!!'}
                      ModalChildren={
                        <div>
                          {roomClient?.map(room => (
                            <button key={room?.id} className="btn_address" onClick={() => handleJoinRoom(room?.id)}>
                              {room?.title}
                            </button>
                          ))}
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
