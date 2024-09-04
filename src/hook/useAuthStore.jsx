import { useDispatch, useSelector } from 'react-redux'

import { calendarApi } from '../api'
import { clearErrorMessage, onChecking, onLogin, onLogout, onLogoutCalendar } from '../store'

export const useAuthStore = () => {
  const dispatch = useDispatch()
  const { status, user, errorMessage } = useSelector((state) => state.auth)

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking())
    try {
      const { data } = await calendarApi.post('/auth/', { email, password })
      console.log(data)
      localStorage.setItem('token', data.token)
      dispatch(onLogin({ fullName: data.fullName, uid: data.uid }))
    } catch (error) {
      dispatch(onLogout('Credenciales incorrectas'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
    }
  }

  const startRegister = async ({ email, password, firstName, lastName }) => {
    dispatch(onChecking())
    try {
      const { data } = await calendarApi.post('/auth/register', { email, password, firstName, lastName })
      localStorage.setItem('token', data.token)
      dispatch(onLogin({ fullName: data.fullName, uid: data.uid, firstName, lastName }))
    } catch (error) {
      dispatch(onLogout('Error al registrar el usuario'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 10)
    }
  }

  const startLogout = () => {
    localStorage.clear()
    dispatch(onLogout())
    dispatch(onLogoutCalendar())
  }

  const checkAuthToken = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      dispatch(onLogout())
      return
    }

    try {
      const { data } = await calendarApi.get('/auth/refreshToken')
      const [firstName, lastName] = data.fullName.split(' ')
      localStorage.setItem('token', data.token)
      dispatch(onLogin({ fullName: data.fullName, uid: data.uid, firstName, lastName }))
    } catch (error) {
      dispatch(onLogout())
    }
  }

  return {
    startLogin,
    startRegister,
    checkAuthToken,
    startLogout,

    status,
    user,
    errorMessage
  }
}
