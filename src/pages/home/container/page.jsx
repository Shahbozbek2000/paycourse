import React, { memo, useState } from 'react'
import Contract from '../components/contract'
import { PaymentMethod } from '../components/payment'
import { Container } from './style'
import { Row, Col } from 'antd'
import { Navbar } from 'components/navbar'

const Home = () => {
  const [hasChecked, setHasChecked] = useState(false)

  return (
    <>
      <Navbar />
      <Container>
        <Row gutter={(window.innerWidth > 450) ? [32, 32] : [16, 16]}>
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
