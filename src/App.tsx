import React from 'react'
import { Login } from './components/login/Login'
import { DashBoard } from './pages/DashBoard/DashBoard'
import { Users } from './pages/Users/Users'
import { UserDetails } from './pages/UserDetails/UserDetails'
import './styles/css/App.css'
import PrivateRoutes from './routing/PrivateRoutes'
import { useState } from 'react'
import { useAuthContext } from './hooks/useAuthContext'
import { Routes, Route } from 'react-router-dom'


const App: React.FC = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false)
  const [dropDownActive, setDropDownActive] = useState<boolean>(false)
  const { auth } = useAuthContext()


  return (
    <div className='App'>

      <Routes >
        <Route element={<PrivateRoutes auth={auth} showSideBar={showSideBar} setShowSideBar={setShowSideBar} />}>
          <Route path='/' element={<DashBoard dropDownActive={dropDownActive} setShowSideBar={setShowSideBar} showSideBar={showSideBar} />} />
          <Route path='/users' element={<Users dropDownActive={dropDownActive} setDropDownActive={setDropDownActive} setShowSideBar={setShowSideBar} showSideBar={showSideBar} />} />
          <Route path='/user-details/:id' element={<UserDetails dropDownActive={dropDownActive} setDropDownActive={setDropDownActive} setShowSideBar={setShowSideBar} showSideBar={showSideBar} />} />
        </Route>
        <Route>
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App


