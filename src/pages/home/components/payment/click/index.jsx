import React from 'react'
import Click from 'assets/images/click.png'
import { ClickWrapper, PaymentProvider } from './style'
import Payme from 'assets/images/payme.svg'

export const PaymentMethods = ({ hasChecked }) => {
  return (
    <PaymentProvider>
      {!hasChecked ? (
        <h3>Читайте договор перед оплатой!</h3>
      ) : (
        <>
          <ClickWrapper disabled={!hasChecked} hasChecked={hasChecked}>
            <img src={Click} alt="click" />
          </ClickWrapper>
          <ClickWrapper
            className='payme-btn'
            disabled={!hasChecked}
            hasChecked={hasChecked}
          >
            <img src={Payme} alt="Payme" />
          </ClickWrapper>
        </>
      )}
    </PaymentProvider>
  )
}
