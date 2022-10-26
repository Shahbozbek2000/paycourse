import React, { useState } from 'react';
import { FormGroupProvider, Input } from './style';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { VisiblePassword } from 'pages/auth/components/login/style';
import 'antd/dist/antd.css';

export function InputComponent({
  Controller,
  nameProps,
  plProps,
  control,
  required = true,
  disabled,
  className,
  type = 'text',
  minLength = 2,
  readOnly,
  style,
  errors,
  autoComplete = 'off',
  hasPassword = false,
  setVisiblePassword,
  visiblePassword
}) {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
    setVisiblePassword(!visiblePassword)
  }
  return (
    <>
      <Controller
        control={control}
        name={nameProps}
        rules={{
          required: required,
          minLength: minLength,
          pattern: /^[a-zA-Z0-9_.,-@'`"?! ]*$/,
        }}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState: { errors },
        }) => (
          <FormGroupProvider className={hasPassword ? 'form-password' : ''}>
            <Input
              className={className}
              oneTap
              ref={ref}
              name={name}
              value={value}
              disabled={disabled}
              onChange={onChange}
              placeholder={plProps}
              error={!!errors?.title}
              type={type}
              onBlur={onBlur}
              readOnly={readOnly}
              style={style}
              errors={errors}
              autoComplete={autoComplete}
            />
            {
              hasPassword &&
              (
                <VisiblePassword onClick={handleShowPassword}>
                  {showPassword ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                </VisiblePassword>
              )
            }

          </FormGroupProvider>
        )}
      />
    </>
  );
}
