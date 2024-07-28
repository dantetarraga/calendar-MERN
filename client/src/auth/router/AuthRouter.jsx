import { Navigate, Route, Routes } from 'react-router-dom'

import LoginPage from '../pages/LoginPage'

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path='login' element={<LoginPage />} />
      <Route path='register' element={<LoginPage />} />

      <Route path='*' element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}

export default AuthRoutes
