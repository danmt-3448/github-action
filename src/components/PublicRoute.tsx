import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext'
import { ROUTE_PATHS } from '@/constants/routesElement'
import { Spin } from 'antd'

interface PublicRouteProps {
  children: React.ReactNode
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const { isAuthenticated, isLoading } = useAuth()
  const location = useLocation()

  if (isLoading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <Spin size='large' />
      </div>
    )
  }

  if (isAuthenticated) {
    // Redirect to the page they tried to visit or dashboard
    return <Navigate to={location.state?.from?.pathname || ROUTE_PATHS.DASHBOARD} replace />
  }

  return <>{children}</>
}

export default PublicRoute
