import { useAuth } from '../contexts/AuthContext'

export const TopMenu = () => {
  const { isAuthenticated } = useAuth()

  return (
    <header className='bg-white shadow-sm'>
      <div className='px-4 py-3 flex items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <span className='text-gray-700'>Welcome!</span>
        </div>
        <div className='flex items-center space-x-4'>
          {isAuthenticated && <span className='text-sm text-gray-600'>Logged in</span>}
        </div>
      </div>
    </header>
  )
}
