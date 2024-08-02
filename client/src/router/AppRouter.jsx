import { Route, Routes } from 'react-router-dom'

import { AuthRouter } from '../auth'
import CalendarPage from '../calendar/pages/CalendarPage'

const AppRouter = () => {
  const authStatus = 'authenticated'

  return (
    <Routes>
      {
        authStatus === 'not-authenticated'
          ? <Route path='/auth/*' element={<AuthRouter />} />
          : <Route path='/*' element={<CalendarPage />} />
      }

    </Routes>
  )
}

export default AppRouter
