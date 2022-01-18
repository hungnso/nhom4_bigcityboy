import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import './homeSidebar.css'
import { useNavigate } from 'react-router-dom'
import ModalForm from '../components/ModalForm'
import PopupForm from '../components/PopupForm'
<<<<<<< HEAD
import { AppContext } from '../Context/AppProvider'
=======
import Mapbox from '../MapAddAddress/mapbox.js'


>>>>>>> e342a279115e81796d198c9043d87973c039fe60
const HomeSidebar = () => {
  const navigate = useNavigate()
  const { rooms } = React.useContext(AppContext)
  console.log(rooms)

  const [show, setShow] = useState(false)

  const [show2, setShow2] = useState(false)

  const handleCLick = e => {
    e.preventDefault()
    navigate('/announcingVote')
  }

  return (
<<<<<<< HEAD
    <>
      {rooms.map(room => (
        <div className="home">
          <div className="home-sidebar">
            <div className="home-sidebar-title">
              <h2>{room.title}</h2>
            </div>
            <div className="home-sidebar-content">
              <h2>{room.des}</h2>
            </div>

            <div className="home-sidebar-members">
              {room.location.map(value => (
                <div className="vote">
                  <h4 className="nameVote">{value}</h4> <h5 className="quantilyVote">10</h5>
                </div>
              ))}
            </div>
            {/* <div className="home-sidebar-location">
                      
                  </div> */}

            <div className="btnEndVote">
              <button style={{ width: '95%' }} onClick={() => setShow(true)}>
                Địa Chỉ
              </button>
              <ModalForm
                show={show}
                onHide={() => setShow(false)}
                ModalTile={''}
                // ModalChildren={<PopupForm value={window.location.href} />}
                size="md"
              />
            </div>
            <div className="btnEndVote">
              <button type="submit" onClick={e => handleCLick(e)}>
                END VOTE
              </button>
            </div>
          </div>
=======
    <div className="home">
      <div className="home-sidebar">
        <button class="go-back"><span>Quay lại</span></button> 
        <div className="home-sidebar-title">
          <h2>Title here</h2>
        </div>
        <div className="home-sidebar-content">
          <h2>Content here</h2>
        </div>
        <div className="home-sidebar-members">
        <div className="vote">
            <h4 className="nameVote">
                <input type="checkbox"></input>
                Công Viên Yên Sở
            </h4>
            <h5 className="quantilyVote">10</h5>
          </div>
          <div className="vote">
            <h4 className="nameVote">
                <input type="checkbox"></input>
                Công Viên Hòa Bình
            </h4>
            <h5 className="quantilyVote">10</h5>
          </div>
          <div className="vote">
            <h4 className="nameVote">
                <input type="checkbox"></input>
                Công Viên Thống Nhất
            </h4>
            <h5 className="quantilyVote">10</h5>
          </div>
          <div className="vote">
            
            <h4 className="nameVote">
            <input type="checkbox"></input>Công Viên Nghĩa Đô
            </h4>
            <h5 className="quantilyVote">10</h5>
          </div>
          <div className="vote">
            <h4 className="nameVote">
                <input type="checkbox"></input>
                Công Viên Hòa Bình
            </h4>
            <h5 className="quantilyVote">10</h5>
          </div>
        </div>
        {/* <div className="home-sidebar-location">
                    
                </div> */}

        <div className="btnLocation_share">
          <button style={{ width: '95%' }} onClick={() => setShow2(true)}>
            Thêm địa Chỉ
          </button>
          <ModalForm
            show={show2}
            onHide={() => setShow2(false)}
            ModalTile={''}
            ModalChildren={<Mapbox/>}
            size="xl"
          />
        </div>

        <div className="btnLocation_share">
        <button style={{ width: '95%' }} onClick={() => setShow(true)}>
            Chia Sẻ Link
          </button>
          <ModalForm
            show={show}
            onHide={() => setShow(false)}
            ModalTile={''}
            ModalChildren={<PopupForm value={window.location.href} />}
            size="md"
          />
        </div>

        <div className="btnEndVote">
          <button type="submit" onClick={e => handleCLick(e)}>
            END VOTE
          </button>
>>>>>>> e342a279115e81796d198c9043d87973c039fe60
        </div>
      ))}
    </>
  )
}

export default HomeSidebar
