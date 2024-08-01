import { useForm } from 'react-hook-form'

import { Button } from '@nextui-org/react'
import { Lock, Mail, User } from 'lucide-react'

import FormField from '../components/FormField'
import useToggle from '../hooks/useToggle'
import AuthLayout from '../layout/AuthLayout'

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useToggle(false)
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
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
        <div className='grid grid-cols-2 gap-5'>
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
          rules={{ required: 'Password is required' }}
        />

        <Button
          onClick={handleSubmit((data) => console.log(data))}
          block
          className='w-full bg-black text-white'
          type='submit'
        >
          Register
        </Button>
      </form>
    </AuthLayout>
  )
}

export default RegisterPage
