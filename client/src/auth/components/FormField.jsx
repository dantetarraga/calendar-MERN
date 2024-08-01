import { cloneElement, forwardRef } from 'react'
import { Controller } from 'react-hook-form'

import { Input } from '@nextui-org/react'
import { Eye, EyeOff } from 'lucide-react'

const FormField = forwardRef(({ control, name, rules, icon, type, label, showPassword, onShowPassword, ...props }, ref) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <Input
          {...field}
          ref={ref}
          label={label}
          type={
            type === 'password' && showPassword
              ? 'text'
              : type
          }
          startContent={icon && cloneElement(icon, { size: 20 })}
          endContent={
            type === 'password' &&
              <button type='button' onClick={onShowPassword}>
                {showPassword
                  ? <EyeOff />
                  : <Eye />}
              </button>
          }
          isInvalid={!!error}
          errorMessage={error?.message}
          color={
            !!error
              ? 'danger'
              : 'default'
          }
          {...props}
        />
      )}
    />
  )
})

FormField.displayName = 'FormField'

export default FormField
