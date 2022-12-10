import { useRouter } from "next/router"
import { Nav, NavItem, NavLink } from "reactstrap"

export const Navbar = () => {
  const router = useRouter()

  return (
    <Nav>
      <NavItem>
        <NavLink
          href="/"
          onClick={(e) => {
            e.preventDefault()
            router.push("/")
          }}
        >
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="/calculator"
          onClick={(e) => {
            e.preventDefault()
            router.push("/calculator")
          }}
        >
          Calculator
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="/location"
          onClick={(e) => {
            e.preventDefault()
            router.push("/location")
          }}
        >
          Location
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          href="/about"
          onClick={(e) => {
            e.preventDefault()
            router.push("/about")
          }}
        >
          About
        </NavLink>
      </NavItem>
    </Nav>
  )
}
