import React from 'react'
import { RegisterProvider } from './style'
import RegisterForm from '../components/register'

const Register = () => {
  return (
    <RegisterProvider>
      <RegisterForm />
    </RegisterProvider>
  )
}

export default Register
