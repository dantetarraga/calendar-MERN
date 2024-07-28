import React from 'react'

import { Input } from '@nextui-org/react'
import { Eye, EyeOff } from 'lucide-react'

const FormField = React.forwardRef(({ icon, type, name, label, showPassword, onShowPassword, ...props }, ref) => {
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
})

FormField.displayName = 'FormField'

export default FormField
