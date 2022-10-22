import React, { useEffect, useState } from 'react'
import { Col } from 'antd'
import {
  Form,
  FormBody,
  FormHeader,
  FormProvider,
  FormRow,
} from '../register/style'
import { useForm, Controller } from 'react-hook-form'
import { InputComponent } from 'components/input/controllerInput'
import { Error, Footer, Label } from 'styles/globalStyles'
import { CrudButton } from 'components/button'
import { useAuth } from '../hooks/useAuth'
import Cookies from 'js-cookie'
import { Token } from 'services/token'
import { Link, useNavigate } from 'react-router-dom'
import { PhoneMask } from 'components/mask'
import { InfoCircleFilled } from '@ant-design/icons'

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()
  const [token, setToken] = useState(null)
  const { onSubmit, isLoading } = useAuth()

  useEffect(() => {
    let token = Cookies.get(Token)
    if (token) {
      navigate('/')
    }
    setToken(token)
    // eslint-disable-next-line
  }, [])

  return (
    <FormProvider>
      {!token ? (
        <Form className='login-form' onSubmit={handleSubmit(onSubmit)}>
          <FormHeader>
            <h1>С1 вместе с РУДН</h1>
            <p>Пройти регистрацию</p>
          </FormHeader>
          <FormBody>
            <FormRow gutter={[16, 16]}>
              <Col span={24} md={24}>
                <Label>Контактный телефон *</Label>
                <PhoneMask
                  Controller={Controller}
                  control={control}
                  nameProps="phone"
                  required={true}
                  errors={errors}
                  className={
                    errors && errors?.hasOwnProperty('phone') && 'input-error'
                  }
                />
                {errors && errors?.hasOwnProperty('phone') && (
                  <Error>
                    <InfoCircleFilled />
                    Пожалуйста, введите контактний телефон!
                  </Error>
                )}
              </Col>
              <Col span={24} md={24}>
                <Label>Пароль *</Label>
                <InputComponent
                  Controller={Controller}
                  control={control}
                  nameProps="password"
                  type='password'
                  plProps="Пароль"
                  label="Имя*"
                  autoComplete='new-password'
                  errors={errors}
                  className={
                    errors &&
                    errors?.hasOwnProperty('password') &&
                    'input-error'
                  }
                />
                {errors && errors?.hasOwnProperty('password') && (
                  <Error>
                    <InfoCircleFilled /> Пожалуйста, введите пароль!
                  </Error>
                )}
              </Col>
              <Col span={24} md={24}>
                <CrudButton
                  type="submit"
                  name="Вход"
                  className='login-btn'
                  disabled={isLoading}
                  isLoading={isLoading}
                />
                <Footer>Новое на нашей платформе? <Link to='/register'>Завести аккаунт</Link></Footer>
              </Col>
            </FormRow>
          </FormBody>
        </Form>
      ) : null}
    </FormProvider>
  )
}

export default Login
