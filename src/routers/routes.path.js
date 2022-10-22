import { lazy } from "react"
const Home = lazy(() => import('pages/home/container/page'))
const Register = lazy(() => import('pages/auth/container/page'))
const Login = lazy(() => import('pages/auth/components/login'))
const NotFound = lazy(() => import('pages/404'))


export const routes = [
   {
      path: '/',
      index: true,
      element: <Home />
   },
   {
      path: '/register',
      element: <Register />
   },
   {
      path: '/login',
      element: <Login/>
   },
   {
      path: '*',
      element: <NotFound/>
   }
]