import { useForm } from 'react-hook-form'

import { Button } from '@nextui-org/react'
import { Lock, Mail } from 'lucide-react'

import { sleep } from '../../utils'
import FormField from '../components/FormField'
import useToggle from '../hooks/useToggle'
import AuthLayout from '../layout/AuthLayout'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useToggle(false)
  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    sleep(2000)
    console.log(data)
  }

  return (
    <AuthLayout
      title='Welcome Back!'
      subtitle='Sign in to your account to manage your schedule and events.'
    >
      <form className='bg-white rounded-lg space-y-5' onSubmit={handleSubmit(onSubmit)}>
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
          className='w-full bg-black text-white'
          isLoading={false}
        >
          Sign In
        </Button>
      </form>
    </AuthLayout>
  )
}

export default LoginPage
