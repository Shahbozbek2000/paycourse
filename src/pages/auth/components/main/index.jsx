import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SystemPath } from 'routers/constants'
import { Token } from 'services/token'
import { Form, FormProvider } from 'styles/globalStyles'
import { FormHeader } from '../register/style'
import { FormPanel, FormPanelInfo, FormPanelWrap } from './style'

const MainAuthorization = () => {
  const navigate = useNavigate()
  const [token, setToken] = useState(null)

  useEffect(() => {
    let token = Cookies.get(Token)
    if (token) {
      navigate('/main')
    }
    setToken(token)
    // eslint-disable-next-line
  }, [])

  return (
    <FormProvider>
      {
        !token ? 
        (
          <Form className="main-form">
          <FormHeader>
            <h1>ООО «SERTIFIKAT SERVIS»</h1>
          </FormHeader>
          <FormPanelWrap>
            <FormPanel
              type="button"
              onClick={() => navigate(SystemPath.REGISTER_URL)}
            >
              Регистрация
            </FormPanel>
            <FormPanelInfo>Если вы заходите в данный сайт в первые!</FormPanelInfo>
          </FormPanelWrap>
          <FormPanelWrap>
            <FormPanel
              type="button"
              onClick={() => navigate(SystemPath.LOGIN_URL)}
            >
              Войти
            </FormPanel>
            <FormPanelInfo>Если вы раньше прошли регистрацию!</FormPanelInfo>
          </FormPanelWrap>
        </Form>
        ) : null
      }     
    </FormProvider>
  )
}

export default MainAuthorization
