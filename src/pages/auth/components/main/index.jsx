import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SystemPath } from 'routers/constants'
import { Form, FormProvider } from 'styles/globalStyles'
import { FormPanel, FormPanelInfo, FormPanelWrap } from './style'

const MainAuthorization = () => {
  const navigate = useNavigate()
  
  return (
    <FormProvider>
      <Form className="main-form">
        <FormPanelWrap>
          <FormPanel
            type="button"
            onClick={() => navigate(SystemPath.REGISTER_URL)}>
            Регистрация
          </FormPanel>
          <FormPanelInfo>Если вы  заходите в данный сайт в первые</FormPanelInfo>
        </FormPanelWrap>
        <FormPanelWrap>
          <FormPanel
            type="button"
            onClick={() => navigate(SystemPath.LOGIN_URL)}>
            Войти
          </FormPanel>
          <FormPanelInfo>Если вы  заходите в данный сайт в первые</FormPanelInfo>
        </FormPanelWrap>
      </Form>
    </FormProvider>
  )
}

export default MainAuthorization
