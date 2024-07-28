import { Route, Routes } from 'react-router-dom'

import LoginPage from '../auth/pages/LoginPage'
import CalendarPage from '../calendar/pages/CalendarPage'

const AppRouter = () => {
  const authStatus = 'not-authenticated'

  return (
    <Routes>
      {
        authStatus === 'not-authenticated'
          ? <Route path='/auth/*' element={<LoginPage />} />
          : <Route path='/*' element={<CalendarPage />} />
      }

    </Routes>
  )
}

export default AppRouter
