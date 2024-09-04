import { Button, Navbar, NavbarBrand, NavbarItem } from '@nextui-org/react'
import { CalendarDays, LogOut } from 'lucide-react'

import { useAuthStore } from '../../hook'

const NavBar = () => {
  const { startLogout, user } = useAuthStore()

  const handleLogout = () => {
    startLogout()
  }

  return (
    <Navbar className='w-full bg-white text-black mb-10 shadow'>
      <NavbarBrand className='gap-3'>
        <CalendarDays size={25} />
        <h2 className='uppercase font-bold text-inherit text-xl'>Mi Calendario</h2>
        <span className='text-lg text-slate-600'>|</span>
        <p className='text-lg font-semibold text-slate-600 text-inherit'>{user.fullName}</p>
      </NavbarBrand>

      <NavbarItem justify='end'>
        <Button
          onClick={handleLogout}
          startContent={<LogOut />}
          variant='bordered'
          className='text-red-500 border-red-500'
        >
          Log out
        </Button>
      </NavbarItem>
    </Navbar>
  )
}

export default NavBar
