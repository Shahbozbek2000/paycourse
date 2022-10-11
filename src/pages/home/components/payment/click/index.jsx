import React from 'react'
import Click from 'assets/images/click.png'
import { ClickWrapper } from './style'
import Payme from 'assets/images/payme.svg'

export const PaymentMethods = () => {
  return (
    <>
      <ClickWrapper>
        <img src={Click} alt="click" />
      </ClickWrapper>
      <ClickWrapper style={{ paddingTop: 18 }}>
        <img src={Payme} alt="Payme" />
      </ClickWrapper>
    </>
  )
}
