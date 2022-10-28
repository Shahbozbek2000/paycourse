import React from 'react'
import { Result } from 'antd'

export const SuccessPage = ({ socialParams }) => {
   console.log(socialParams, 'socialParams')
  return (
    <>
      <Result
        status={socialParams?.payment_status == 1 ? 'success' : 'error'}
        title={
          socialParams?.payment_status == 1
            ? 'Ваш платеж успешно произведен!' : 'Платеж не прошел!'
        }
      />
    </>
  )
}
