import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthProvider from './Context/AuthProvider'
import GroupForm from './GroupForm'
import LoginForm from './LoginForm'
import LoginSocial from './LoginSocial'
import HomeSidebar from './HomeSidebar'
import AnnouncingVote from './AnnouncingVote/announcingVote'
import AppProvider from './Context/AppProvider'

function App() {
  const [isAuth, setIsAuth] = React.useState(localStorage.getItem('isAuth'))
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route element={<LoginSocial setIsAuth={setIsAuth} />} path="login" />
            <Route element={<LoginForm />} path="/" />
            <Route element={<GroupForm />} path="create" />
            <Route element={<HomeSidebar />} path={'room-vote'} />
            <Route element={<AnnouncingVote />} path={'announcingVote'} />
          </Routes>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
