import React from 'react'
import Click from 'assets/images/click.png'
// import Payme from 'assets/images/payme.svg'
import { ButtonWrapper, ClickWrapper, PaymentProvider } from './style'
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
        <div/>
        {/* <ClickWrapper
          onClick={() => sendPayment('payme')}
          disabled={!hasChecked}
          hasChecked={hasChecked}
        >
          <img src={Payme} alt="Payme" />
        </ClickWrapper> */}
      </ButtonWrapper>
    </PaymentProvider>
  )
}
