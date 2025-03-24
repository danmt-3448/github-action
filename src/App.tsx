import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import PrivateLayout from '@/layouts/PrivateLayout'
import { PRIVATE_ROUTES, PUBLIC_ROUTES, ROUTE_PATHS } from '@/constants/routesElement'
import { AuthProvider } from '@/contexts/AuthContext'
import ProtectedRoute from '@/components/ProtectedRoute'
import PublicRoute from '@/components/PublicRoute'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          {PUBLIC_ROUTES.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={<PublicRoute>{route.element}</PublicRoute>}
            />
          ))}

          {/* Private Routes */}
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <PrivateLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to={ROUTE_PATHS.DASHBOARD} replace />} />
            {PRIVATE_ROUTES.map((route) => (
              <Route key={route.key} path={route.path.replace('/', '')} element={route.element} />
            ))}
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
