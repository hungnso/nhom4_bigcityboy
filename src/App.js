import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import AuthProvider from './Context/AuthProvider'
import GroupForm from './GroupForm'
import LoginForm from './LoginForm'
import LoginSocial from './LoginSocial'
import HomeSidebar from './HomeSidebar'
import AnnouncingVote from './AnnouncingVote/announcingVote'
import Home from './home'
import Error from './Error'
import LoadingLink from './LoadingLink'
import AppProvider from './Context/AppProvider'
import ListRoom from './ListRoom/ListRoom'

function App() {
  const [isAuth, setIsAuth] = React.useState(localStorage.getItem('isAuth'))
  // const [linkRoom, setLinkRoom] = React.useState('')
  // if (isAuth) {
  //   navigate('/home')
  // }
  // useEffect(() => {
  //   var URL = window.location.href
  //   var partURL = URL.split('/')
  //   var link_id = partURL[partURL.length - 1]
  //   setLinkRoom(link_id)
  //   console.log(partURL)
  //   console.log(linkRoom)
  // }, [])

  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route element={<LoginSocial setIsAuth={setIsAuth} />} path="/" />
            <Route element={<LoginForm />} path="/contact" />
            <Route element={<GroupForm />} path="/create" />
            <Route element={<HomeSidebar />} path={'/room-vote/:id'} />
            <Route element={<AnnouncingVote />} path={'/announcingVote'} />
            <Route element={<Home />} path={'/home'} />
            <Route element={<ListRoom />} path={'/list-room'} />
            <Route element={<Error />} path={'/error'} />
            <Route path="/:linkRoom" element={<LoadingLink />} />
          </Routes>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
