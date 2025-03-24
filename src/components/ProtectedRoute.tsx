import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { ROUTE_PATHS } from '@/constants/routesElement'
import { Spin } from 'antd'

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <Spin size='large' />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTE_PATHS.LOGIN} state={{ from: location }} replace />
  }

  return <>{children}</>
}

export default ProtectedRoute
