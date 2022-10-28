import React from 'react'
import { Result } from 'antd'

export const SuccessPage = ({ socialParams }) => {
  return (
    <>
      <Result
        status={socialParams?.payment_status === '0' ? 'error' : 'success'}
        title={
          socialParams?.payment_status === '0'
            ? 'Платеж не прошел!'
            : 'Ваш платеж успешно произведен!'
        }
      />
    </>
  )
}
