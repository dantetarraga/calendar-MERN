import { Controller, useForm } from 'react-hook-form'

import { Button } from '@nextui-org/react'
import { Mail } from 'lucide-react'

import FormField from '../components/FormField'
import useToggle from '../hooks/useToggle'
import AuthLayout from '../layout/AuthLayout'

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useToggle(false)
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  return (
    <AuthLayout
      title='Welcome to Your Personal Calendar'
      subtitle='Organize your time, plan your days, and never miss an important event.'
    >
      <form className='space-y-5'>

        <Controller
          name='firstName'
          control={control}
          rules={{ required: 'Name is required' }}
          render={({ field, fieldState: { error } }) => (
            <FormField
              label='Name'
              type='text'
              placeholder='Enter your first name'
              error={error}
              icon={<Mail />}
              {...field}
            />
          )}
        />

        <Controller
          name='lastName'
          control={control}
          rules={{ required: 'Last name is required' }}
          render={({ field, fieldState: { error } }) => (
            <FormField
              label='Username'
              type='text'
              placeholder='Enter your last name'
              error={error}
              icon={<Mail />}
              {...field}
            />
          )}
        />

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
              showPassword={showPassword}
              onShowPassword={setShowPassword}
              error={error}
              {...field}
            />
          )}
        />

        <Button
          onClick={handleSubmit((data) => console.log(data))}
          block
          auto
          type='submit'
        />
      </form>
    </AuthLayout>
  )
}

export default RegisterPage
