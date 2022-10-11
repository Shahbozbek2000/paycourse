import { authApi } from "services/api/pagesApi"
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"
import { useState } from "react"
import Cookies from "js-cookie"
import { Token } from "services/token"

export const useAuth = () => {
   const navigate = useNavigate()
   const [isLoading, setIsLoading] = useState(false)
   const onSubmit = async (data) => {
      try {
         let payload = {
            name: data.name,
            surname: data.surname,
            last_name: data.last_name,
            phone: data.phone,
            tos: true
         }
         setIsLoading(true)
         let response = await authApi.login(payload)
         toast.success("Вы успешно вошли в систему")
         Cookies.set(Token, response?.token);
         navigate('/')
         setIsLoading(false)
      } catch (e) {
         console.log(e)
         toast.error(e.message)
         setIsLoading(false)
      } finally {
         setIsLoading(false)
      }
   }
   return {
      onSubmit,
      isLoading
   }
}