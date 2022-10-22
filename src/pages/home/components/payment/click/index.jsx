import React from 'react'
import Click from 'assets/images/click.png'
import { ClickWrapper, PaymentProvider } from './style'
import Payme from 'assets/images/payme.svg'
// import NotPay from 'assets/images/notpay.png'

export const PaymentMethods = ({ hasChecked }) => {
  return (
    <PaymentProvider>
      {!hasChecked ? (
        <h3>Читайте договор перед оплатой!</h3>
        // <Image src={NotPay} alt="notpay" />
      ) : (
        <>
          <ClickWrapper disabled={!hasChecked} hasChecked={hasChecked}>
            <img src={Click} alt="click" />
          </ClickWrapper>
          <ClickWrapper
            style={{ paddingTop: 18 }}
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
