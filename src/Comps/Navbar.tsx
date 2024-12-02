

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  // Helper function to check if a path is active
  const isActivePath = (path: string) => {
    return location.pathname === path
  }

  // Common link styles with active state
  const getLinkStyles = (path: string) => {
    const isActive = isActivePath(path)
    return `group inline-flex h-9 w-max items-center justify-center rounded-md text-white px-4 py-2 text-sm font-medium transition-colors hover:bg-red-600 focus:bg-red-600 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 ${
      isActive ? 'bg-red-600 text-gray-900' : ''
    }`
  }

  // Mobile link styles with active state
  const getMobileLinkStyles = (path: string) => {
    const isActive = isActivePath(path)
    return `flex w-full items-center py-2 text-lg font-semibold hover:text-red-600 ${
      isActive ? 'text-red-600' : ''
    }`
  }

  // Handle mobile link clicks
  const handleMobileClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 flex  h-20 w-full shrink-0 items-center px-4 md:px-6 border-b border-zinc-700 bg-zinc-800/45 backdrop-blur-md">
     
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex items-center justify-between px-4 py-2 w-full text-white">
          {/* Logo on the left */}
          <Link to="/">
            <MountainIcon  />
            <span className="sr-only">Acme Inc</span>
          </Link>

          {/* Hamburger on the right */}
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden bg-transparent border-0 hover:bg-transparent"
            >
              <MenuIcon className="h-10 w-10 text-white hover:text-black" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
        </div>

        <SheetContent
          side="left"
          className="text-white bg-zinc-300/15 backdrop-blur-md"
        >
          <div className="grid gap-2 py-6">
            <Link to="/" className={getMobileLinkStyles("/")} onClick={handleMobileClick}>
              Home
            </Link>
            <Link to="/about" className={getMobileLinkStyles("/about")} onClick={handleMobileClick}>
              About us
            </Link>
            <Link to="/products" className={getMobileLinkStyles("/products")} onClick={handleMobileClick}>
              Products
            </Link>
            <Link to="/events" className={getMobileLinkStyles("/events")} onClick={handleMobileClick}>
              Events
            </Link>
            <Link to="/contact" className={getMobileLinkStyles("/contact")} onClick={handleMobileClick}>
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>

      <Link to="/" className="mr-6 hidden lg:flex">
        {/* <MountainIcon  />  */}
        <span className="sr-only">Acme Inc</span>
      </Link>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link to="/" className={getLinkStyles("/")}>
              Home
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link to="/about" className={getLinkStyles("/about")}>
              About Us
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link to="/products" className={getLinkStyles("/products")}>
              Products
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link to="/events" className={getLinkStyles("/events")}>
              Events
            </Link>
          </NavigationMenuLink>
          {/* <NavigationMenuLink asChild>
            <Link to="/support" className={getLinkStyles("/support")}>
              Support
            </Link>
          </NavigationMenuLink> */}
          <NavigationMenuLink asChild>
            <Link to="/contact" className={getLinkStyles("/contact")}>
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="94"
      height="94"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="1" x2="100" y1="12" y2="12" />
      <line x1="1" x2="100" y1="3" y2="3" />
      <line x1="1" x2="100" y1="20" y2="20" />
    </svg>
  )
}

function MountainIcon(props: React.HTMLAttributes<HTMLImageElement>) {
  return (
    <div className="rounded-full">
    <img
    className="rounded-full"
      src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1733119011/swissco/c4b3614e-28ab-47c8-835e-04e8d47a1d16.png"
      alt="logo"
      height="auto"
      width="50px"
      {...props} 
      />
      </div>
  )
}
