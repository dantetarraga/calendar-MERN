import { Link } from 'react-router-dom'

import { Button, Navbar, NavbarBrand, NavbarItem } from '@nextui-org/react'
import { CalendarDays, LogOut } from 'lucide-react'

const NavBar = () => {
  return (
    <Navbar className='w-full bg-black text-white'>
      <NavbarBrand>
        <CalendarDays />
        <p className='font-bold text-inherit ml-3'>Dante</p>
      </NavbarBrand>

      <NavbarItem justify='end'>
        <Button
          as={Link}
          href='#'
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
