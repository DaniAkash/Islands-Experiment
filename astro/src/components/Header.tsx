import { Nav, NavItem, NavLink } from "reactstrap";

export const Header = () => {
  return (
    <header>
      <Nav>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/calculator">Calculator</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/location">Location</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">About</NavLink>
        </NavItem>
      </Nav>
    </header>
  );
};
