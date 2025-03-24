import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/scss/main.scss'
import { ConfigProvider } from 'antd'
import { theme } from './constants/common'
import App from '@/App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
)
