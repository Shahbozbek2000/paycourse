import React, { useEffect, useState } from 'react'
import { Col } from 'antd'
import { Form, FormBody, FormHeader, FormProvider, FormRow } from './style'
import { useForm, Controller } from 'react-hook-form'
import { InputComponent } from 'components/input/controllerInput'
import { Error, Label } from 'styles/globalStyles'
import { CustomMask } from 'components/mask/customMask'
import { CrudButton } from 'components/button'
import { useAuth } from '../hooks/useAuth'
import Cookies from 'js-cookie'
import { Token } from 'services/token'
import { useNavigate } from 'react-router-dom'
import { ShapeTop } from 'assets/svg/shape-top'
import { ShapeBottom } from 'assets/svg/shape-bottom'

const RegisterForm = () => {
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
  }, [])

  return (
    <FormProvider>
      <ShapeTop />
      {!token ? (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormHeader>
            <h1>С1 вместе с РУДН</h1>
            <p>Пройти регистрацию</p>
          </FormHeader>
          <FormBody>
            <FormRow gutter={[16, 16]}>
              <Col span={24} md={24}>
                <Label>Имя *</Label>
                <InputComponent
                  Controller={Controller}
                  control={control}
                  nameProps="name"
                  plProps="Имя"
                  label="Имя*"
                  className={
                    errors && errors?.hasOwnProperty('name') && 'input-error'
                  }
                />
                {errors && errors?.hasOwnProperty('name') && (
                  <Error>Пожалуйста, введите имя!</Error>
                )}
              </Col>
              <Col span={24} md={24}>
                <Label>Фамилия *</Label>
                <InputComponent
                  Controller={Controller}
                  control={control}
                  nameProps="surname"
                  plProps="Фамилия"
                  label="фамилия*"
                  className={
                    errors && errors?.hasOwnProperty('surname') && 'input-error'
                  }
                />
                {errors && errors?.hasOwnProperty('surname') && (
                  <Error>Пожалуйста, введите фамилия!</Error>
                )}
              </Col>
              <Col span={24} md={24}>
                <Label>Отчество *</Label>
                <InputComponent
                  Controller={Controller}
                  control={control}
                  nameProps="last_name"
                  plProps="Отчество"
                  label="Имя*"
                  className={
                    errors &&
                    errors?.hasOwnProperty('last_name') &&
                    'input-error'
                  }
                />
                {errors && errors?.hasOwnProperty('last_name') && (
                  <Error>Пожалуйста, введите oтчество!</Error>
                )}
              </Col>
              <Col span={24} md={24}>
                <Label>Контактный телефон *</Label>
                <CustomMask
                  Controller={Controller}
                  control={control}
                  nameProps="phone"
                  required={true}
                  mask="+998 (11) 111-11-11"
                  title="Phone"
                  placeholder="Контактний телефон"
                  className={
                    errors && errors?.hasOwnProperty('phone') && 'input-error'
                  }
                />
                {errors && errors?.hasOwnProperty('phone') && (
                  <Error>Пожалуйста, введите контактний телефон!</Error>
                )}
              </Col>
              <Col span={24} md={24}>
                <CrudButton
                  type="submit"
                  name="Далее"
                  disabled={isLoading}
                  isLoading={isLoading}
                />
              </Col>
            </FormRow>
          </FormBody>
        </Form>
      ) : null}
      <ShapeBottom />
    </FormProvider>
  )
}

export default RegisterForm
