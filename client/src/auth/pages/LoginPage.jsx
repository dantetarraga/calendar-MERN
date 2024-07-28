import { Controller, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

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
          rules={{
            required: 'Email is required',
            pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' }
          }}
          render={({ field, fieldState: { error } }) => (
            <FormField
              label='Email'
              type='text'
              placeholder='Enter your email'
              error={error}
              icon={<Mail />}
              {...field}
            />
          )}
        />

        <Controller
          name='password'
          control={control}
          rules={{ required: 'Password is required' }}
          render={({ field, fieldState: { error } }) => (
            <FormField
              label='Password'
              type='password'
              placeholder='Enter your password'
              icon={<Lock />}
              showPassword={showPassword}
              onShowPassword={setShowPassword}
              error={error}
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

      <p className='text-slate-400 mt-4 text-end'>
        Don't have account? {' '}
        <Link to='/auth/register' className='text-black cursor-pointer font-semibold'>Register</Link>
      </p>
    </AuthLayout>
  )
}

export default LoginPage
