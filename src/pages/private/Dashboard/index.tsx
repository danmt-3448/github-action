import { Card, Row, Col, Statistic } from 'antd'
import { UserOutlined, ShoppingOutlined, FileOutlined } from '@ant-design/icons'

const Dashboard = () => {
  return (
    <div className='p-6'>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic title='Active Users' value={1128} prefix={<UserOutlined />} />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic title='Total Orders' value={93} prefix={<ShoppingOutlined />} />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic title='Documents' value={42} prefix={<FileOutlined />} />
          </Card>
        </Col>
      </Row>

      <Card className='mt-6'>
        <h4 className='text-lg font-medium mb-4'>Overview</h4>
        <p className='text-gray-600'>
          This is your protected dashboard page. Only authenticated users can see this content. You
          can customize this dashboard with various widgets and data visualizations.
        </p>
      </Card>
    </div>
  )
}

export default Dashboard
