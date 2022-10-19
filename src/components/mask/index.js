import React from 'react'
import { PhoneMaskProvider } from "./style"
import InputMask from "react-input-mask";
import "./index.css"

export function PhoneMask(props) {
   const {
      Controller,
      control,
      title,
      nameProps,
      children,
      required = true,
      label,
      errors
   } = props
   return (
      <PhoneMaskProvider>
         <div>
            <span>{title}</span>
            <div className={errors?.hasOwnProperty('phone') ? 'error' : 'input-group'}>
               <div className="input-group-prepend">
                  <span className="input-group-text">+998</span>
               </div>
               <Controller
                  control={control}
                  name={nameProps}
                  rules={{ required: required, minLength: 3 }}
                  render={({
                     field: { onChange, onBlur, value, name, ref },
                     fieldState: { invalid, isTouched, isDirty, error },
                     formState: { errors },
                  }) => (
                     <InputMask
                        ref={ref}
                        value={value}
                        onChange={onChange}
                        name={name}
                        placeholder="-- --- -- --"
                        className={'form-control-new'}
                        mask="(99) 999 99 99"
                        label={label}
                        required={required}
                        onBlur={onBlur}
                     >
                        {children}
                     </InputMask>
                  )}
               />
            </div>
         </div>
      </PhoneMaskProvider>
   )
}
