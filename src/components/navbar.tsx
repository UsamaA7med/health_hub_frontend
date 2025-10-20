import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Image,
} from '@heroui/react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const menuItems = [
  { item: 'HOME', href: '/' },
  { item: 'ALL DOCTORS', href: '/all-doctors' },
  { item: 'ABOUT', href: '/about' },
  { item: 'CONTACT', href: '/contact' },
]

export default function NavBar() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      classNames={{
        item: [
          'flex',
          'relative',
          'h-full',
          'items-center',
          "data-[active=true]:after:content-['']",
          'data-[active=true]:after:absolute',
          'data-[active=true]:after:bottom-0',
          'data-[active=true]:after:left-0',
          'data-[active=true]:after:right-0',
          'data-[active=true]:after:h-[2px]',
          'data-[active=true]:after:rounded-[2px]',
          'data-[active=true]:after:bg-primary',
        ],
      }}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>
      <NavbarBrand className="gap-2  justify-end md:justify-start">
        <img src={'/logo.png'} alt="logo" className="w-8 h-8" />
        <p className="font-bold font-outfit text-xl text-secondary">
          HealthHub
        </p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map(({ item, href }) => (
          <NavbarItem key={item} isActive={location.pathname === href}>
            <Link color="foreground" href={href}>
              {item}
            </Link>
          </NavbarItem>
        ))}
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full" color="foreground" href="#" size="lg">
                {item.item}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem key={'create-account'}>
            <Link
              className="w-full"
              color="foreground"
              href="/login?mode=register"
              size="lg"
            >
              Create account
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <Button className="text-white" as={Link} color="primary" href="/login?mode=register">
            Create account
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
