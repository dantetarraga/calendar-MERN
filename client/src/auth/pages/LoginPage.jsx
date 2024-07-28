import { Button } from '@nextui-org/react'
import { Lock, Mail } from 'lucide-react'

import FormField from '../components/FormField'
import useToggle from '../hooks/useToggle'
import AuthLayout from '../layout/AuthLayout'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useToggle(false)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <AuthLayout
      title='Welcome Back!'
      subtitle='Sign in to your account to manage your schedule and events.'
    >
      <form className='bg-white rounded-lg space-y-5'>
        <FormField
          label='Email'
          type='email'
          name='email'
          placeholder='Enter your email'
          icon={<Mail />}
        />

        <FormField
          label='Password'
          type='password'
          name='password'
          placeholder='Enter your password'
          icon={<Lock />}
          showPassword={showPassword}
          onShowPassword={setShowPassword}
        />

        <Button
          type='submit'
          onClick={handleSubmit}
          className='w-full bg-black text-white'
        >
          Sign In
        </Button>
      </form>
    </AuthLayout>
  )
}

export default LoginPage
