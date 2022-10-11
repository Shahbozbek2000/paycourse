import React from 'react';
import { FormGroupProvider, Input } from './style';

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
  style
}) {
  return (
    <>
      <Controller
        control={control}
        name={nameProps}
        rules={{ required: required, minLength: minLength }}
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState: { errors },
        }) => (
          <FormGroupProvider>
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
            />
          </FormGroupProvider>
        )}
      />
    </>
  );
}
