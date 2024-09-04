import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { AuthRouter } from '../auth'
import CalendarPage from '../calendar/pages/CalendarPage'
import { useAuthStore } from '../hook'

const AppRouter = () => {
  const { checkAuthToken, status } = useAuthStore()

  useEffect(() => {
    checkAuthToken()
  }, [])

  if (status === 'checking') {
    return (
      <h1>Cargando...</h1>
    )
  }

  return (
    <Routes>
      {
        status === 'not-authenticated'
          ? (
            <>
              <Route path='/auth/*' element={<AuthRouter />} />
              <Route path='/*' element={<Navigate to='/auth/login' />} />
            </>
            )
          : (
            <>
              <Route path='/' element={<CalendarPage />} />
              <Route path='/*' element={<Navigate to='/' />} />
            </>
            )
      }
      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}

export default AppRouter
