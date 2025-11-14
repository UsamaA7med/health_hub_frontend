import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from '@heroui/react'
import AdminDrawer from './AdminDrawer'

export default function AdminNavbar() {
  return (
    <Navbar maxWidth="full" isBordered>
      <NavbarBrand className="gap-2  justify-center md:justify-start">
        <div className="md:hidden">
          <AdminDrawer />
        </div>
        <img src={'/logo.png'} alt="logo" className="w-8 h-8" />
        <p className="font-bold font-outfit text-xl text-secondary">
          HealthHub
        </p>
        <p className="text-sm border border-secondary rounded-full px-2">
          Admin
        </p>
      </NavbarBrand>
      <NavbarContent justify="end" className="hidden md:flex">
        <NavbarItem>
          <Button className="text-white rounded-full px-8" color="primary">
            Logout
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
