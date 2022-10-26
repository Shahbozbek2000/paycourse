import { authApi } from "services/api/pagesApi"
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"
import { useState } from "react"
import Cookies from "js-cookie"
import { role, Token } from "services/token"

export const useLogin = () => {
   const navigate = useNavigate()
   const [isLoading, setIsLoading] = useState(false)

   const onLogin = async (data) => {
      try {
         let payload = {
            phone: data.phone.replace(/ /g, '')
            .replace(/X/g, '')
            .replace(/_/g, ''),
            password: data.password
         }
         setIsLoading(true)
         let response = await authApi.login(payload)
         toast.success("Вы успешно вошли в систему")
         Cookies.set(Token, response?.token);
         Cookies.set(role, response?.role)
         navigate('/main')
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
      onLogin,
      isLoading
   }
}