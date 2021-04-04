import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { GiHamburgerMenu } from 'react-icons/Gi';

export const Header = () => (
  <NavContainer>
    <NavWrapper>
      <NavLogo>OscarAnillo</NavLogo>
      <NavMenu><GiHamburgerMenu /></NavMenu>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about/">About</NavLink>
        <NavLink to="/contact/">Contact</NavLink>
      </NavLinks>
    </NavWrapper>
  </NavContainer>
)

const NavContainer = styled.nav`
  background: #111;
  z-index: 100;
`
const NavWrapper = styled.div`
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NavLogo = styled.h1`
  color: #fff;
  padding-left: .5em;
`
const NavMenu = styled.div`
  color: #fff;
  padding-right: .5em;
  cursor: pointer;
  font-size: 1.5rem;

  @media screen and (min-width: 800px ) {
    display: none;
  }
`
const NavLinks = styled.div`
  display: none;

  @media screen and (min-width: 800px ) {
    display: flex;
  }
`
const NavLink = styled(Link)`
  margin-right: 2em;
  text-decoration: none;
  color: #fff;
  }
`
