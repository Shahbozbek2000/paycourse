/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { LogoutOutlined } from '@ant-design/icons'
import { Dropdown, Menu, Space } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import { LogoutWrapper } from './style'
import Cookies from 'js-cookie'
import { Token } from 'services/token'
import { useNavigate } from 'react-router-dom'



export const Logout = () => {
   const navigate = useNavigate()

   const menu = (
      <Menu
        items={[
          {
            label: (
              <a href="#" onClick={handleLogout}>
                Выход <LogoutOutlined />
              </a>
            ),
            key: '0',
          },
        ]}
      />
    )

    function handleLogout() {
      Cookies.remove(Token)
      navigate('/')
    }
  return (
    <LogoutWrapper>
      <Dropdown overlay={menu} trigger={['click']}>
        <a onClick={(e) => e.preventDefault()} style={{ color: '#000000' }}>
          <Space>
            <Avatar size={40} icon={<UserOutlined />} />
          </Space>
        </a>
      </Dropdown>
    </LogoutWrapper>
  )
}
