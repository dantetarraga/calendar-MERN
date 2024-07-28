import { cloneElement, forwardRef } from 'react'

import { Input } from '@nextui-org/react'
import { Eye, EyeOff } from 'lucide-react'

const FormField = forwardRef(({ icon, type, name, label, showPassword, onShowPassword, error, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      name={name}
      label={label}
      type={
        type === 'password' && showPassword
          ? 'text'
          : type
      }
      startContent={cloneElement(icon, {
        size: 20,
        color: error && '#F31260'
      })}
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
      isInvalid={!!error}
      errorMessage={error?.message}
      {...props}
    />
  )
})

FormField.displayName = 'FormField'

export default FormField
