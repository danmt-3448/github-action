import { Layout, Button, Modal, Dropdown, Avatar } from 'antd'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { useAuth } from '@/contexts/AuthContext'
import { ROUTE_PATHS } from '@/constants/routesElement'
import { useNavigate } from 'react-router-dom'
import type { MenuProps } from 'antd'

const { Header: AntHeader } = Layout

const Header = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    Modal.confirm({
      title: 'Confirm Logout',
      content: 'Are you sure you want to logout?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        logout()
        navigate(ROUTE_PATHS.LOGIN)
      }
    })
  }

  const items: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile',
      onClick: () => navigate(ROUTE_PATHS.PROFILE)
    },
    {
      type: 'divider'
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      onClick: handleLogout,
      danger: true
    }
  ]

  return (
    <AntHeader className='bg-white px-6 flex items-center justify-between'>
      <h1 className='text-xl font-semibold'>Dashboard</h1>
      <div className='flex items-center gap-4'>
        <span>Welcome, User</span>
        <Dropdown menu={{ items }} placement='bottomRight'>
          <Button type='text' className='flex items-center gap-2'>
            <Avatar icon={<UserOutlined />} />
            <span>Admin</span>
          </Button>
        </Dropdown>
      </div>
    </AntHeader>
  )
}

export default Header
