import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export const Sidebar = () => {
  const { logout } = useAuth()

  return (
    <aside className='w-64 bg-white shadow-md'>
      <div className='p-4'>
        <h2 className='text-xl font-semibold text-gray-800'>My App</h2>
      </div>
      <nav className='mt-4'>
        <ul className='space-y-2'>
          <li>
            <Link to='/' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/profile' className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>
              Profile
            </Link>
          </li>
          <li>
            <button
              onClick={logout}
              className='w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100'
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
