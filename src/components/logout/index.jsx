/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import { LogoutWrapper } from './style'
import Cookies from 'js-cookie'
import { role, Token } from 'services/token'
import { useNavigate } from 'react-router-dom'
import { Modal } from 'antd'

export const Logout = () => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    Cookies.remove(Token)
    Cookies.remove(role)
    navigate('/')
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <LogoutWrapper>
      <Avatar size={40} icon={<UserOutlined />} onClick={showModal} />
      <Modal
        title="Выход"
        open={isModalOpen}
        onOk={handleOk}
        okText="Да"
        cancelText="Нет"
        onCancel={handleCancel}
      >
        <h3 style={{ color: '#000000', fontWeight: '400' }}>
          Вы действительно хотите выйти?
        </h3>
      </Modal>
    </LogoutWrapper>
  )
}
