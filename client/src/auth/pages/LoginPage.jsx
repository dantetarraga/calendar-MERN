import { Input } from '@nextui-org/react'
import { Lock, Mail } from 'lucide-react'

import AuthLayout from '../layout/AuthLayout'

const LoginPage = () => {
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
        />
      </form>
    </AuthLayout>
  )
}

export default LoginPage
