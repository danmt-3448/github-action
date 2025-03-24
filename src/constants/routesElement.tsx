import { ReactNode } from 'react'
import { DashboardOutlined, SettingOutlined } from '@ant-design/icons'
import Dashboard from '@/pages/private/Dashboard'
import Profile from '@/pages/private/Profile'
import ForgotPassword from '@/pages/public/ForgotPassword'
import Login from '@/pages/public/Login'

export interface RouteConfig {
  key: string
  path: string
  label: string
  icon?: ReactNode
  element?: ReactNode
  children?: RouteConfig[]
}

// Route Paths
export const ROUTE_PATHS = {
  // Public routes
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',

  // Private routes
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  SETTINGS: '/settings'
} as const

// Route Labels
export const ROUTE_LABELS = {
  LOGIN: 'Login',
  FORGOT_PASSWORD: 'Forgot Password',
  DASHBOARD: 'Dashboard',
  PROFILE: 'Profile',
  LOGOUT: 'Logout',
  SETTINGS: 'Settings'
} as const

// Route Keys
export const ROUTE_KEYS = {
  LOGIN: 'login',
  FORGOT_PASSWORD: 'forgot-password',
  DASHBOARD: 'dashboard',
  PROFILE: 'profile',
  LOGOUT: 'logout',
  SETTINGS: 'settings'
} as const

// Public Routes with Elements
export const PUBLIC_ROUTES: RouteConfig[] = [
  {
    key: ROUTE_KEYS.LOGIN,
    path: ROUTE_PATHS.LOGIN,
    label: ROUTE_LABELS.LOGIN,
    element: <Login />
  },
  {
    key: ROUTE_KEYS.FORGOT_PASSWORD,
    path: ROUTE_PATHS.FORGOT_PASSWORD,
    label: ROUTE_LABELS.FORGOT_PASSWORD,
    element: <ForgotPassword />
  }
]

// Private Routes with Elements
export const PRIVATE_ROUTES: RouteConfig[] = [
  {
    key: ROUTE_KEYS.DASHBOARD,
    path: ROUTE_PATHS.DASHBOARD,
    label: ROUTE_LABELS.DASHBOARD,
    icon: <DashboardOutlined />,
    element: <Dashboard />
  },
  {
    key: ROUTE_KEYS.PROFILE,
    path: ROUTE_PATHS.PROFILE,
    label: ROUTE_LABELS.PROFILE,
    icon: <SettingOutlined />,
    element: <Profile />
  },
  {
    key: ROUTE_KEYS.SETTINGS,
    path: ROUTE_PATHS.SETTINGS,
    label: ROUTE_LABELS.SETTINGS,
    icon: <SettingOutlined />
  }
]

// Sidebar Menu Items
export const SIDEBAR_MENU_ITEMS = [
  {
    key: ROUTE_PATHS.DASHBOARD,
    icon: <DashboardOutlined />,
    label: ROUTE_LABELS.DASHBOARD
  },
  {
    key: ROUTE_PATHS.SETTINGS,
    icon: <SettingOutlined />,
    label: ROUTE_LABELS.SETTINGS
  }
] as const
