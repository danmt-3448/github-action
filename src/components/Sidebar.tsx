import { Layout, Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import { SIDEBAR_MENU_ITEMS } from '@/constants/routesElement'

const { Sider } = Layout

const Sidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleMenuClick = (path: string) => {
    navigate(path)
  }

  return (
    <Sider width={200} theme='light'>
      <div className='p-4 text-xl font-bold'>Logo</div>
      <Menu
        mode='inline'
        selectedKeys={[location.pathname.split('/')[1] || 'dashboard']}
        style={{ height: '100%', borderRight: 0 }}
        items={[...SIDEBAR_MENU_ITEMS]} // Spread into new array to make mutable
        onClick={({ key }) => {
          const selectedItem = SIDEBAR_MENU_ITEMS.find((item) => item.key === key)
          if (selectedItem) {
            handleMenuClick(key)
          }
        }}
      />
    </Sider>
  )
}

export default Sidebar
