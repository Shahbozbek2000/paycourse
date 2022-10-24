import React from 'react'
import Click from 'assets/images/click.png'
import { ButtonWrapper, ClickWrapper, PaymentProvider } from './style'
import Payme from 'assets/images/payme.svg'
import { usePayment } from 'pages/home/hooks/usePayment'

export const PaymentMethods = ({ hasChecked }) => {
  const sendPayment = usePayment()

  return (
    <PaymentProvider>
      <h3>Читайте (оферту) договор перед оплатой!</h3>
      <ButtonWrapper>
        <ClickWrapper
          onClick={() => sendPayment('click')}
          disabled={!hasChecked}
          hasChecked={hasChecked}
        >
          <img src={Click} alt="click" />
        </ClickWrapper>
        <ClickWrapper
          onClick={() => sendPayment('payme')}
          disabled={!hasChecked}
          hasChecked={hasChecked}
        >
          <img src={Payme} alt="Payme" />
        </ClickWrapper>
      </ButtonWrapper>
    </PaymentProvider>
  )
}
