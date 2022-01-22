import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase/config'
import useFirestore from '../hooks/useFirestore'
import { AuthContext } from './AuthProvider'

export const AppContext = React.createContext()

export default function AppProvider({ children }) {
  const [curraddName, setCurrAddName] = useState('')
  const [selectedRoomId, setSelectedRoomId] = useState('')
  const [locationVote, setLocationVote] = useState([])
  const [list, setList] = useState([])
  const [currLocation, setCurrLocation] = useState('')
  const [nickname, setNickName] = React.useState('')

  const { user } = React.useContext(AuthContext)

  //// Đây là lấy ra các danh sách phòng mà người dùng là khách(client)
  const roomsClientCondition = React.useMemo(() => {
    return {
      fieldName: 'member',
      operator: 'array-contains',
      compareValue: user.uid
    }
  }, [user.uid])
  const roomClient = useFirestore('rooms', roomsClientCondition)
  // console.log('client', roomClient)

  //// Đây là lấy ra các danh sách mà người dùng là chủ (host)
  const roomsHostCondition = React.useMemo(() => {
    return {
      fieldName: 'user_id',
      operator: '==',
      compareValue: user.uid
    }
  }, [user.uid])
  const roomHost = useFirestore('rooms', roomsHostCondition)
  // console.log('host', roomHost)

  /// Kiểm tra phòng host
  const selectedRoomHost = React.useMemo(
    () => roomHost.find(room => room.id === selectedRoomId) || {},
    [roomHost, selectedRoomId]
  )
  // console.log(selectedRoomHost)
  const selectedRoomClient = React.useMemo(
    () => roomClient.find(room => room.id === selectedRoomId) || {},
    [roomClient, selectedRoomId]
  )
  const clearState = () => {
    setSelectedRoomId('')
  }

  return (
    <AppContext.Provider
      value={{
        curraddName,
        setCurrAddName,
        selectedRoomId,
        setSelectedRoomId,
        roomClient,
        roomHost,
        selectedRoomHost,
        selectedRoomClient,
        locationVote,
        setLocationVote,
        list,
        setList,
        clearState,
        currLocation,
        setCurrLocation,
        nickname,
        setNickName
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
