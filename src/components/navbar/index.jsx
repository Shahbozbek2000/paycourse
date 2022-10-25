import React, { useEffect, useState } from 'react'
import {
  DownLoadExcel,
  Form,
  Image,
  MobileIcon,
  NavbarBrand,
  NavbarProvider,
  NavMenu,
  NavTitle,
} from './style'
import Logo from 'assets/images/logo.png'
import { DownloadOutlined } from '@ant-design/icons'
import { Container } from 'pages/home/container/style'
import { Controller, useForm } from 'react-hook-form'
import { useMutateExcel } from './useMutateExcel'
import { Sling as Hamburger } from 'hamburger-react'
import { systemColors } from 'styles/colors'
import { Logout } from 'components/logout'
import TwoDate from 'components/calendar/twoDate'

export const Navbar = () => {
  const { control, handleSubmit } = useForm()
  const onSubmit = useMutateExcel()
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }
  useEffect(() => {
    showButton()
  }, [])
  window.addEventListener('resize', showButton)

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <NavbarProvider>
      <Container className="navbar-container">
        <NavbarBrand>
          <Image src={Logo} alt="logo" />
        </NavbarBrand>
        <MobileIcon onClick={handleClick} click={click}>
          <Hamburger
            duration={0.4}
            rounded
            className="hamburger"
            size={28}
            color={`${systemColors.btnColor}`}
            toggled={click}
            toggle={setClick}
          />
        </MobileIcon>
        <NavMenu click={click}>
          <NavTitle>
            Познокомностъ прохожения тестирований С1 <span>Без очереди</span>{' '}
          </NavTitle>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <TwoDate
              Controller={Controller}
              control={control}
              nameProps="date"
              plProps="dd/mm/yyyy"
              format="DD.MM.YYYY"
              required={true}
              className="excel-calendar"
            />
            <DownLoadExcel type="submit">
              Загрузка данных <DownloadOutlined />
            </DownLoadExcel>
          </Form>
        </NavMenu>
        <Logout />
      </Container>
    </NavbarProvider>
  )
}
