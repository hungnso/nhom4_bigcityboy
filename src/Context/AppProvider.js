import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase/config'
import useFirestore from '../hooks/useFirestore'
import { AuthContext } from './AuthProvider'

export const AppContext = React.createContext()

export default function AppProvider({ children }) {
  const [curraddName, setCurrAddName] = useState('')
  // console.log(curraddName)
  const { user } = React.useContext(AuthContext)
  const roomsCondition = React.useMemo(() => {
    return {
      fieldName: 'members',
      operator: 'array-contains',
      compareValue: user.uid
    }
  }, [user.uid])

  const rooms = useFirestore('rooms', roomsCondition)

  const userCondition = React.useMemo(() => {
    return {
      fieldName: 'displayName',
      operator: '==',
      compareValue: 'Hùng Dương'
    }
  }, [])
  const hung = useFirestore('users', userCondition)
  console.log(hung)

  return <AppContext.Provider value={{ rooms, curraddName, setCurrAddName, hung }}>{children}</AppContext.Provider>
}
