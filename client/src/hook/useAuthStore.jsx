import { useDispatch, useSelector } from 'react-redux'

import { calendarApi } from '../api'
import { clearErrorMessage, onLogin, onLogout } from '../store'

export const useAuthStore = () => {
  const dispatch = useDispatch()
  const { status, user, errorMessage } = useSelector((state) => state.auth)

  const startLogin = async ({ email, password }) => {
    try {
      const { data } = await calendarApi.post('/auth/', { email, password })
      localStorage.setItem('token', data.token)
      dispatch(onLogin({ fullName: data.fullName, uid: data.uid }))
    } catch (error) {
      dispatch(onLogout('Credenciales incorrectas'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
    }
  }

  return {
    startLogin,

    status,
    user,
    errorMessage
  }
}
