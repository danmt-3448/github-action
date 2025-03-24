import { useState } from 'react'
import { Card, Form, Button, Switch, Divider, Typography, Select } from 'antd'
import { SaveOutlined } from '@ant-design/icons'

const { Title } = Typography
const { Option } = Select

interface SettingsForm {
  notifications: boolean
  language: string
  timezone: string
  emailUpdates: boolean
}

const Settings = () => {
  const [form] = Form.useForm<SettingsForm>()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (values: SettingsForm) => {
    try {
      setLoading(true)
      // Here you would typically make an API call to save settings
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
      console.log('Settings saved:', values)
    } catch (error) {
      console.error('Failed to save settings:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='p-6'>
      <Card>
        <Title level={4}>Settings</Title>
        <Form
          form={form}
          layout='vertical'
          onFinish={handleSubmit}
          initialValues={{
            notifications: true,
            language: 'en',
            timezone: 'UTC',
            emailUpdates: true
          }}
        >
          <Form.Item name='notifications' label='Enable Notifications' valuePropName='checked'>
            <Switch />
          </Form.Item>

          <Form.Item name='language' label='Language'>
            <Select>
              <Option value='en'>English</Option>
              <Option value='es'>Spanish</Option>
              <Option value='fr'>French</Option>
            </Select>
          </Form.Item>

          <Form.Item name='timezone' label='Timezone'>
            <Select>
              <Option value='UTC'>UTC</Option>
              <Option value='EST'>EST</Option>
              <Option value='PST'>PST</Option>
            </Select>
          </Form.Item>

          <Divider />

          <Form.Item name='emailUpdates' label='Email Updates' valuePropName='checked'>
            <Switch />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' icon={<SaveOutlined />} loading={loading}>
              Save Settings
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Settings
