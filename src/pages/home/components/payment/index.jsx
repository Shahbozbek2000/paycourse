import React from 'react'
import { PaymentBody, PaymentHeader, PaymentWrapper } from './style'
import { PaymentMethods } from './click'

export const PaymentMethod = ({ hasChecked }) => {
  return (
    <PaymentWrapper>
      <PaymentHeader>
        <h1>Произвести oплату:</h1>
      </PaymentHeader>
      <PaymentBody>
        <PaymentMethods hasChecked={hasChecked} />
      </PaymentBody>
    </PaymentWrapper>
  )
}
