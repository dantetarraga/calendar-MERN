import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button } from '@nextui-org/react'
import { Lock, Mail } from 'lucide-react'
import Swal from 'sweetalert2'

import { useAuthStore } from '../../hook'
import FormField from '../components/FormField'
import useToggle from '../hooks/useToggle'
import AuthLayout from '../layout/AuthLayout'

const LoginPage = () => {
  const { startLogin, errorMessage } = useAuthStore()
  const [showPassword, setShowPassword] = useToggle(false)
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  useEffect(() => {
    if (errorMessage !== undefined) Swal.fire('Error en la autententicación', errorMessage, 'error')
  }, [errorMessage])

  const onSubmit = (data) => {
    startLogin(data)
  }

  return (
    <AuthLayout
      title='Welcome Back!'
      subtitle='Sign in to your account to manage your schedule and events.'
    >
      <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
        <FormField
          control={control}
          name='email'
          label='Email'
          type='text'
          placeholder='Enter your email'
          icon={<Mail />}
          rules={{
            required: 'Email is required',
            pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' }
          }}
        />

        <FormField
          control={control}
          name='password'
          label='Password'
          type='password'
          placeholder='Enter your password'
          icon={<Lock />}
          showPassword={showPassword}
          onShowPassword={setShowPassword}
          rules={{ required: 'Password is required' }}
        />

        <Button
          type='submit'
          className='w-full bg-black text-white'
          // isLoading={false}
        >
          Sign In
        </Button>
      </form>

      <p className='text-slate-400 mt-4 text-end text-xs md:text-sm'>
        Don't have account? {' '}
        <Link to='/auth/register' className='text-black cursor-pointer font-semibold'>Register</Link>
      </p>
    </AuthLayout>
  )
}

export default LoginPage
