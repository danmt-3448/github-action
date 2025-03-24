import { Card, Typography, Descriptions, Avatar, Tag, Divider } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const { Title } = Typography

const Profile = () => {
  return (
    <div className='p-6'>
      <Card>
        <div className='flex items-center mb-6'>
          <Avatar size={64} icon={<UserOutlined />} />
          <div className='ml-4'>
            <Title level={4} className='mb-0'>
              John Doe
            </Title>
            <span className='text-gray-500'>Software Developer</span>
          </div>
        </div>

        <Divider />

        <Descriptions title='Account Information' bordered>
          <Descriptions.Item label='Name'>John Doe</Descriptions.Item>
          <Descriptions.Item label='Email'>john.doe@example.com</Descriptions.Item>
          <Descriptions.Item label='Role'>
            <Tag color='blue'>Administrator</Tag>
          </Descriptions.Item>
          <Descriptions.Item label='Department'>Engineering</Descriptions.Item>
          <Descriptions.Item label='Location'>San Francisco, CA</Descriptions.Item>
          <Descriptions.Item label='Join Date'>2023-01-01</Descriptions.Item>
        </Descriptions>

        <Divider />

        <div className='mt-6'>
          <Title level={5}>
            <LockOutlined className='mr-2' />
            Authentication Status
          </Title>
        </div>
      </Card>
    </div>
  )
}

export default Profile
