import React from 'react'
import { DownLoadExcel, Form, Image, NavbarBrand, NavbarProvider } from './style'
import Logo from 'assets/images/logo.png'
import { DownloadOutlined } from '@ant-design/icons'
import { Container } from 'pages/home/container/style'
import Calendar from 'components/calendar'
import { Controller, useForm } from 'react-hook-form'
import { useMutateExcel } from './useMutateExcel'

export const Navbar = () => {
  const {
    control,
    handleSubmit,
  } = useForm();
 const onSubmit = useMutateExcel()

  return (
    <NavbarProvider>
      <Container className="navbar-container">
        <NavbarBrand>
          <Image src={Logo} alt="logo" />
        </NavbarBrand>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Calendar
            Controller={Controller}
            control={control}
            nameProps="date"
            picker="date"
            plProps="dd/mm/yyyy"
            format="DD.MM.YYYY"
            required={true}
            className='excel-calendar'
          />
          <DownLoadExcel type='submit'>
            Загрузка данных <DownloadOutlined />
          </DownLoadExcel>
        </Form>
      </Container>
    </NavbarProvider>
  )
}
