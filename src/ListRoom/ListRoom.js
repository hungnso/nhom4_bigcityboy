import React from 'react'
import { AppContext } from '../Context/AppProvider'
import useFirestore from '../hooks/useFirestore'

export default function ListRoom() {
  const { roomClient, roomHost, setSelectedRoomId, selectedRoomHost, selectedRoomClient } = React.useContext(AppContext)
  console.log(selectedRoomHost)
  /// Lấy địa chỉ hiện tại của từng room
  const condition = React.useMemo(() => {
    return {
      fieldName: 'room_id',
      operator: '==',
      compareValue: selectedRoomHost.id || selectedRoomClient.id
    }
  }, [selectedRoomHost.id, selectedRoomClient.id])

  const address = useFirestore('user_room', condition)
  console.log(address)
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
