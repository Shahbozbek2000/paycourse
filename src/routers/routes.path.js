import { lazy } from "react"
import { SystemPath } from "./constants"
const Home = lazy(() => import('pages/home/container/page'))
const Register = lazy(() => import('pages/auth/container/page'))
const Login = lazy(() => import('pages/auth/components/login'))
const NotFound = lazy(() => import('pages/404'))
const MainAuthorization = lazy(() => import('pages/auth/components/main'))



export const routes = [
   {
      path: SystemPath.MAIN_URL,
      element: <MainAuthorization/>
   },
   {
      path: SystemPath.HOME_URL,
      element: <Home />
   },
   {
      path: SystemPath.REGISTER_URL,
      element: <Register />
   },
   {
      path: SystemPath.LOGIN_URL,
      element: <Login/>
   },
   {
      path: '*',
      element: <NotFound/>
   }
]