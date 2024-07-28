import { Input } from '@nextui-org/react'
import { Mail } from 'lucide-react'

import AuthLayout from '../layout/AuthLayout'

const LoginPage = () => {
  return (
    <AuthLayout
      title='Welcome Back!'
      subtitle='Sign in to your account to manage your schedule and events.'
    >
      <form className='bg-white p-5 rounded-lg'>
        <Input
          label='Email'
          type='email'
          placeholder='Enter your email'
          startContent={
            <Mail />
          }
        />
      </form>
    </AuthLayout>
  )
}

export default LoginPage
