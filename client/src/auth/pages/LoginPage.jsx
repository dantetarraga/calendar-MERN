import { Input } from '@nextui-org/react'
import { Eye, EyeOff, Lock, Mail } from 'lucide-react'

import useToggle from '../hooks/useToggle'
import AuthLayout from '../layout/AuthLayout'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useToggle(false)

  return (
    <AuthLayout
      title='Welcome Back!'
      subtitle='Sign in to your account to manage your schedule and events.'
    >
      <form className='bg-white rounded-lg space-y-5'>
        <Input
          label='Email'
          type='email'
          placeholder='Enter your email'
          startContent={
            <Mail />
          }
        />

        <Input
          label='Password'
          type='password'
          placeholder='Enter your password'
          startContent={
            <Lock />
          }
          endContent={
            <button type='button' onClick={setShowPassword}>
              {
                showPassword
                  ? <EyeOff />
                  : <Eye />
              }
            </button>
          }
        />
      </form>
    </AuthLayout>
  )
}

export default LoginPage
