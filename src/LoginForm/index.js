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
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function LoginForm() {
  let navigate = useNavigate()

  const [show, setShow] = useState(false)

  const handleCLick = e => {
    e.preventDefault()
    navigate('/create')
  }

  const handleGoBack = () => {
    navigate(-1)
  }
  const {
    user: { displayName, uid }
  } = useContext(AuthContext)

  addDocument('user_location', {
    latitude: '566666',
    longtudue: '66666'
  })

  const formik = useFormik({
    initialValues: {
      full_name: ''
    },
    validationSchema: Yup.object({
      full_name: Yup.string()
        .min(2, 'Tên Phải Chứa Ít Nhất 2 Ký Tự')
        .max(30, 'Tên Chứa Tối Đa 30 Ký Tự')
        .required('Tên Không Được Để Trống!')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })

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
            <form onSubmit={formik.handleSubmit}>
              <div className="login_wrapper">
                <div className="formsix-pos">
                  <div className="form-group">
                    <InputForm
                      type="text"
                      id="Text1"
                      placeholder="Tên Người Dùng *"
                      name="full_name"
                      defaultValue={formik.values.full_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.full_name && formik.touched.full_name && (
                      <p className="msg_err">{formik.errors.full_name}</p>
                    )}
                  </div>
                </div>
                <div className="formsix-e">
                  <div className="form-group">
                    <div className="address_vote">
                      <button className="btn_address" onClick={() => setShow(true)}>
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
                  <button type="submit" onClick={e => handleGoBack(e)} className="btn login_btn">
                    Trở Về
                  </button>
                  <button type="submit" onClick={e => handleCLick(e)} className="btn login_btn">
                    Tiếp Theo
                  </button>
                </div>
              </div>
            </form>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </Container>
    </div>
  )
}
