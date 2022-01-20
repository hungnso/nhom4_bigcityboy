import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../firebase/config'
import { AppContext } from '../Context/AppProvider'

function LoadingLink() {
  var navigate = useNavigate()
  // const isUser = localStorage.getItem('isAuth')
  var { setSelectedRoomId } = React.useContext(AppContext)
  var { linkRoom } = useParams()

  useEffect(() => {
    // get all room_id
    db.collection('rooms')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (linkRoom === doc.id) {
            setSelectedRoomId(doc.id)
            navigate('/contact')
          }
        })
      })
    navigate('/login')
  }, [])

  return <div></div>
}

export default LoadingLink
