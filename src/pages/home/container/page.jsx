import React from 'react'
import { Contract } from '../components/contract'
import { PaymentMethod } from '../components/payment'
import { Container } from './style'
import { Row, Col } from 'antd'


const Home = () => {
  return (
    <Container>
      <Row gutter={[16, 16]}>
        <Col span={24} md={12}>
          <Contract />
        </Col>
        <Col span={24} md={12}>
          <PaymentMethod />
        </Col>
      </Row>
    </Container>
  )
}

export default Home
