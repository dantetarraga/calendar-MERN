import React from 'react'
import { Controller } from 'react-hook-form'

const FormField = ({ control, name, label, placeholder, component: Component, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Component
          label={label}
          placeholder={placeholder}
          {...field}
          {...props}
        />
      )}
    />
  )
}

export default FormField
