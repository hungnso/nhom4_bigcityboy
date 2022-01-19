import React from 'react'
import { AppContext } from '../Context/AppProvider'
import { db } from '../firebase/config'
import useFirestore from '../hooks/useFirestore'

export default function ListRoom() {
  const { roomClient, roomHost, setSelectedRoomId, selectedRoomHost, selectedRoomClient } = React.useContext(AppContext)
  // console.log(selectedRoomHost)
  /// Lấy địa chỉ hiện tại của từng room
  const condition = React.useMemo(() => {
    return {
      fieldName: 'room_id',
      operator: '==',
      compareValue: selectedRoomHost.id || selectedRoomClient.id
    }
  }, [selectedRoomHost.id, selectedRoomClient.id])

  const address = useFirestore('user_room', condition)
  // console.log(address)
  db.collection('rooms')
    .doc('Ky28EpIm4WfWHfdToJk1')
    .get()
    .then(doc => {
      if (doc.exists) {
        console.log('Document data:', doc.data())
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!')
      }
    })
  // db.collection('books').where(db.FieldPath.documentId(), '==', 'Ux3nnZvaRH6kTcbXoF93').get()

  return (
    <div>
      <ul>
        <h2>Danh sách phòng làm chủ</h2>
        {roomHost.map(room => (
          <li onClick={() => setSelectedRoomId(room.id)} key={room.id}>
            {room.title}
          </li>
        ))}
      </ul>
      <ul>
        <h2>Danh sách phòng làm khách</h2>
        {roomClient.map(room => (
          <li onClick={() => setSelectedRoomId(room.id)} key={room.id}>
            {room.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
