import { Controller, useForm } from 'react-hook-form'

import { Button } from '@nextui-org/react'
import { Lock, Mail } from 'lucide-react'

import { sleep } from '../../utils'
import FormField from '../components/FormField'
import useToggle from '../hooks/useToggle'
import AuthLayout from '../layout/AuthLayout'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useToggle(false)
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = (data) => {
    sleep(2000)
    console.log('Form submitted')
    console.log(data)
  }

  return (
    <AuthLayout
      title='Welcome Back!'
      subtitle='Sign in to your account to manage your schedule and events.'
    >
      <form className='bg-white rounded-lg space-y-5' onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <FormField
              label='Email'
              type='text'
              placeholder='Enter your email'
              icon={<Mail />}
              {...field}
            />
          )}
        />

        <Controller
          name='password'
          control={control}
          render={({ field }) => (
            <FormField
              label='Password'
              type='password'
              placeholder='Enter your password'
              icon={<Lock />}
              showPassword={showPassword}
              onShowPassword={setShowPassword}
              {...field}
            />
          )}
        />

        <Button
          type='submit'
          className='w-full bg-black text-white'
          // isLoading={false}
        >
          Sign In
        </Button>
      </form>
    </AuthLayout>
  )
}

export default LoginPage
