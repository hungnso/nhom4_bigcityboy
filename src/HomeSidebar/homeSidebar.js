import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import './homeSidebar.css'
import { useNavigate } from 'react-router-dom'
import ModalForm from '../components/ModalForm'
import PopupForm from '../components/PopupForm'
import { AppContext } from '../Context/AppProvider'
import useFirestore from '../hooks/useFirestore'
import { addDocument } from '../firebase/services'
import { AuthContext } from '../Context/AuthProvider'
const HomeSidebar = () => {
  const navigate = useNavigate()
  const { selectedRoomHost, selectedRoomClient, locationVote } = React.useContext(AppContext)
  const {
    user: { uid }
  } = React.useContext(AuthContext)
  // console.log(!selectedRoomClient)
  // console.log(!!selectedRoomHost)
  console.log(locationVote)
  const [show, setShow] = useState(false)

  const [show2, setShow2] = useState(false)

  const conditionLocationVote = React.useMemo(() => {
    return {
      fieldName: 'room_id',
      operator: '==',
      compareValue: selectedRoomHost.id
    }
  }, [selectedRoomHost.id])

  React.useEffect(() => {
    locationVote.map(value => {
      addDocument('locations', {
        location: value,
        num_vote: 0,
        room_id: selectedRoomHost.id ? selectedRoomHost.id : selectedRoomClient.id,
        createBy: uid
      })
    })
  }, [locationVote, selectedRoomClient.id, uid, selectedRoomHost])

  const arrLocationVote = useFirestore('locations', conditionLocationVote)

  const handleEndVote = e => {
    e.preventDefault()
    if (!selectedRoomHost.title) {
      alert('Chỉ người tạo phòng mới đc end')
    } else {
      navigate('/announcingVote')
    }
  }

  return (
    <>
      <div className="home">
        <div className="home-sidebar">
          <div className="home-sidebar-title">
            <h2>{selectedRoomHost.title ? selectedRoomHost.title : selectedRoomClient.title}</h2>
          </div>
          <div className="home-sidebar-content">
            <h2>{selectedRoomHost.description ? selectedRoomHost.description : selectedRoomClient.description}</h2>
          </div>

          <div className="home-sidebar-members">
            {arrLocationVote.map(location => (
              <div className="vote" key={location.id}>
                <h4 className="nameVote">{location.location}</h4>
                <h5 className="quantilyVote">{location.num_vote}</h5>
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
              ModalChildren={<PopupForm value={window.location.href} />}
              size="md"
            />
          </div>
          <div className="btnEndVote">
            <button type="submit" onClick={e => handleEndVote(e)}>
              END VOTE
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeSidebar
