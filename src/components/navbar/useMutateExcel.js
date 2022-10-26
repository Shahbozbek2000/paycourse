import { paymentApi } from "services/api/pagesApi"
import dayjs from "dayjs"
import toast from "react-hot-toast"

export const useMutateExcel = (handleClick) => {
  let defaultFormat = 'YYYY-MM-DD'

   const onSubmit = async (data) => {
      try {
         let payload = {
            from: data.date ? dayjs(data.date[0]).format(defaultFormat) : undefined,
            to: data.date ? dayjs(data.date[1]).format(defaultFormat) : undefined,
         }
        let res =  await paymentApi.excelExport(payload)
        if (res) {
         window.open(
           `${process.env.REACT_APP_API_SECOND_ROOT}${res?.url}`,
           '_blank'
         );
       }
         handleClick()
      } catch (e) {
         console.log(e)
         toast.error(e.message || 'Что-то пошло не так')
      }
   }
   
   return onSubmit
}