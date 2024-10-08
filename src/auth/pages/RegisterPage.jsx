import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { Button } from '@nextui-org/react'
import { Lock, Mail, User } from 'lucide-react'

import { useAuthStore } from '../../hook'
import FormField from '../components/FormField'
import useToggle from '../hooks/useToggle'
import AuthLayout from '../layout/AuthLayout'

const RegisterPage = () => {
  const dispatch = useDispatch()
  const { startRegister, errorMessage } = useAuthStore()
  const [showPassword, setShowPassword] = useToggle(false)
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  })

  const onSubmit = (data) => {
    startRegister(data)
  }

  return (
    <AuthLayout
      title='Welcome to Your Personal Calendar'
      subtitle='Organize your time, plan your days, and never miss an important event.'
    >
      <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
        <div className='grid md:grid-cols-2 gap-5 grid-cols-1'>
          <FormField
            control={control}
            name='firstName'
            label='Name'
            type='text'
            placeholder='Enter your first name'
            icon={<User />}
            rules={{ required: 'Name is required' }}
          />

          <FormField
            control={control}
            name='lastName'
            label='Last Name'
            type='text'
            placeholder='Enter your last name'
            icon={<User />}
            rules={{ required: 'Last name is required' }}
          />
        </div>

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
          rules={{
            required: 'Password is required',
            minLength: { value: 6, message: 'Password must be at least 6 characters long' }
          }}
        />

        <Button
          block
          className='w-full bg-black text-white'
          type='submit'
        >
          Register
        </Button>
      </form>

      <p className='text-slate-400 mt-4 text-end text-xs md:text-sm'>
        Already have an account? {' '}
        <Link to='/auth/login' className='text-black cursor-pointer font-semibold'>Log in</Link>
      </p>
    </AuthLayout>
  )
}

export default RegisterPage
