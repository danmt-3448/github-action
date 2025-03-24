import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

const { Content } = Layout

const PrivateLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Header />
        <Content className='m-6 p-6 bg-white rounded-lg'>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default PrivateLayout
