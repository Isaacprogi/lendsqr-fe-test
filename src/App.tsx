import React from 'react'
import { Login } from './pages/login/Login'
import { DashBoard } from './pages/DashBoard/DashBoard'
import { Users } from './pages/Users/Users'
import { UserDetails } from './pages/UserDetails/UserDetails'
import './styles/css/App.css'
import PrivateRoutes from './routing/PrivateRoutes'
import { useAuthContext } from './hooks/useAuthContext'
import { Routes, Route } from 'react-router-dom'


const App: React.FC = () => {
  const { auth } = useAuthContext()


  return (
    <div className='App'>

      <Routes >
        <Route element={<PrivateRoutes auth={auth}  />}>
          <Route path='/' element={<DashBoard  />} />
          <Route path='/users' element={<Users  />} />
          <Route path='/user-details/:id' element={<UserDetails  />} />
        </Route>
        <Route>
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App


