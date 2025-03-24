import { useState } from 'react'
import { Form, Input, Button, Card, Typography, Result } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { ROUTE_PATHS } from '@/constants/routesElement'

const { Title } = Typography

interface ForgotPasswordForm {
  email: string
}

const ForgotPassword = () => {
  const [form] = Form.useForm<ForgotPasswordForm>()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (values: ForgotPasswordForm) => {
    try {
      setLoading(true)
      // Here you would typically make an API call to send reset email
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
      console.log('Reset password for:', values.email)
      setSuccess(true)
    } catch (error) {
      console.error('Failed to send reset email:', error)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-gray-50 p-4'>
        <Card className='w-full max-w-md'>
          <Result
            status='success'
            title='Reset Email Sent'
            subTitle='Please check your email for password reset instructions.'
            extra={[
              <Link to={ROUTE_PATHS.LOGIN} key='login'>
                Back to Login
              </Link>
            ]}
          />
        </Card>
      </div>
    )
  }

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50 p-4'>
      <Card className='w-full max-w-md'>
        <Title level={4} className='mb-8 text-center'>
          Forgot Password
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
            <Input prefix={<MailOutlined />} placeholder='Enter your email' size='large' />
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='w-full'
              size='large'
              loading={loading}
            >
              Send Reset Link
            </Button>
          </Form.Item>

          <div className='text-center'>
            <Link to={ROUTE_PATHS.LOGIN}>Back to Login</Link>
          </div>
        </Form>
      </Card>
    </div>
  )
}

export default ForgotPassword
