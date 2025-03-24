import React, { createContext, useContext, useState, useEffect } from 'react'
import { setToken, removeToken, isAuthenticated as checkAuth } from '@/utils/auth'

interface AuthContextType {
  isAuthenticated: boolean
  isLoading: boolean
  login: (_token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    console.error('useAuth must be used within an AuthProvider')
    return { isAuthenticated: false, isLoading: true, login: () => {}, logout: () => {} }
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuthStatus = () => {
      const isAuth = checkAuth()
      setIsAuthenticated(isAuth)
      setIsLoading(false)
    }
    checkAuthStatus()
  }, [])

  const login = (token: string) => {
    setToken(token)
    setIsAuthenticated(true)
  }

  const logout = () => {
    removeToken()
    setIsAuthenticated(false)
  }

  if (isLoading) {
    return null // Or a loading spinner
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
