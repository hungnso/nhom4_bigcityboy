import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import './homeSidebar.css'
import { useNavigate } from 'react-router-dom'
import ModalForm from '../components/ModalForm'
import PopupForm from '../components/PopupForm'


const HomeSidebar = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)

  const handleCLick = e => {
    e.preventDefault()
    navigate('/announcingVote')
  }

  return (
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
          <button style={{ width: '95%' }} onClick={() => setShow(true)}>
            Địa Chỉ
          </button>
          <ModalForm
            show={show}
            onHide={() => setShow(false)}
            ModalTile={''}
            ModalChildren={<PopupForm value={window.location.href} />}
            size="md"
          />
        </div>

        <div className="btnLocation_share">
          <button style={{ width: '95%' }} onClick={() => setShow(true)}>
            Chia sẻ 
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
        </div>
      </div>
    </div>
  )
}

export default HomeSidebar
