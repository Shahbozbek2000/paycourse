import { Navbar } from 'components/navbar'
import { SuccessPage } from 'components/success-page'
import React from 'react'

const PaymentAccepted = () => {
  let object = new URLSearchParams(document.location.search)
  const socialParams = Object.fromEntries(object.entries());
  console.log(socialParams?.payment_status, 'object')
  return (
    <>
      <Navbar />
      <SuccessPage socialParams={socialParams} />
    </>
  )
}

export default PaymentAccepted
