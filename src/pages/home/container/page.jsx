import React, { memo, useEffect, useState } from 'react'
import Contract from '../components/contract'
import { PaymentMethod } from '../components/payment'
import { Container } from './style'
import { Row, Col } from 'antd'
import { Navbar } from 'components/navbar'
import Cookies from 'js-cookie'
import { Token } from 'services/token'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const [hasChecked, setHasChecked] = useState(false)

  useEffect(() => {
    if (!Cookies.get(Token)) {
      navigate('/')
    }
  }, [])

  return (
    <>
      <Navbar />
      <Container>
        <Row gutter={window.innerWidth > 450 ? [32, 32] : [16, 16]}>
          <Col span={24} md={12}>
            <Contract hasChecked={hasChecked} setHasChecked={setHasChecked} />
          </Col>
          <Col span={24} md={12}>
            <PaymentMethod hasChecked={hasChecked} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default memo(Home)
