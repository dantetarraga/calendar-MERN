import { Input } from '@nextui-org/react'
import { Eye, EyeOff } from 'lucide-react'

const FormField = ({ icon, type, name, label, showPassword, onShowPassword, ...props }) => {
  console.log(showPassword)
  return (
    <Input
      name={name}
      label={label}
      type={type}
      startContent={icon}
      endContent={
        type === 'password' &&
          <button type='button' onClick={onShowPassword}>
            {
              showPassword
                ? <EyeOff />
                : <Eye />
            }
          </button>
      }
      {...props}
    />
  )
}

export default FormField
