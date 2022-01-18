import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import './homeSidebar.css'
import { useNavigate } from 'react-router-dom'
import ModalForm from '../components/ModalForm'
import PopupForm from '../components/PopupForm'
import { AppContext } from '../Context/AppProvider'
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
        </div>
      ))}
    </>
  )
}

export default HomeSidebar
