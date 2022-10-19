import React, { memo, useState } from 'react'
import  Contract  from '../components/contract'
import { PaymentMethod } from '../components/payment'
import { Container } from './style'
import { Row, Col } from 'antd'


const Home = () => {
  const [hasChecked, setHasChecked] = useState(false)
  
  return (
    <Container>
      <Row gutter={[32, 32]}>
        <Col span={24} md={12}>
          <Contract hasChecked={hasChecked} setHasChecked={setHasChecked} />
        </Col>
        <Col span={24} md={12}>
          <PaymentMethod hasChecked={hasChecked} />
        </Col>
      </Row>
    </Container>
  )
}

export default memo(Home) 
