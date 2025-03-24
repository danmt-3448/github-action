import { useState } from 'react'
import { Form, Input, Button, Card, Typography, Space } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useNavigate, Link } from 'react-router-dom'
import { ROUTE_PATHS } from '@/constants/routesElement'
import { useAuth } from '@/contexts/AuthContext'

const { Title } = Typography

interface LoginForm {
  email: string
  password: string
}

const Login = () => {
  const navigate = useNavigate()
  const [form] = Form.useForm<LoginForm>()
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const handleSubmit = async (values: LoginForm) => {
    try {
      setLoading(true)
      // Here you would typically make an API call to authenticate
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
      console.log('Login values:', values)
      login('token')
      // Mock successful login
      navigate(ROUTE_PATHS.DASHBOARD)
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50 p-4'>
      <Card className='w-full max-w-md'>
        <Title level={4} className='mb-8 text-center'>
          Login
        </Title>
        <Form form={form} layout='vertical' onFinish={handleSubmit} autoComplete='off'>
          <Form.Item
            name='email'
            label='Email'
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' }
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder='Enter your email' size='large' />
          </Form.Item>

          <Form.Item
            name='password'
            label='Password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder='Enter your password'
              size='large'
            />
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='w-full'
              size='large'
              loading={loading}
            >
              Login
            </Button>
          </Form.Item>

          <Space className='flex justify-between'>
            <Link to={ROUTE_PATHS.FORGOT_PASSWORD}>Forgot Password?</Link>
            <Link to={ROUTE_PATHS.REGISTER}>Register</Link>
          </Space>
        </Form>
      </Card>
    </div>
  )
}

export default Login
