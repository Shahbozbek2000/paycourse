import { paymentApi } from "services/api/pagesApi"

export const usePayment = () => {
   const sendPayment = async (payment_type) => {
      if (payment_type === 'click') {
         let payload = {
            payment_method: 'click',
         }
         let res = await paymentApi.payment_method(payload)
         if (res) {
            window.location.href = res?.payment_url
         }
      } else {
         let payload = {
            payment_method: 'payme',
         }
         let res = await paymentApi.payment_method(payload)
         if (res) {
            window.location.href = res?.payment_url
         }
      }
   }
   return sendPayment
}