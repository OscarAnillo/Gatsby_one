import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { GiHamburgerMenu } from 'react-icons/Gi';

export default function Header(){
  const [open, setOpen] = useState(false);

  const clickHandler = () => {
    setOpen(!open)
  }



  return (
    <NavContainer>
      <NavWrapper>
        <NavLogo>OscarAnillo</NavLogo>
        <NavMenu><GiHamburgerMenu onClick={clickHandler}/>
        </NavMenu>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about/">About</NavLink>
          <NavLink to="/contact/">Contact</NavLink>
        </NavLinks>
      </NavWrapper>
      {open && (<div style={{height: '95vh', width: '100%', background:'#111', position:'absolute'}}>
        <NavLinkMobile to="/">Home</NavLinkMobile>
        <NavLinkMobile to="/about/">About</NavLinkMobile>
        <NavLinkMobile to="/contact/">Contact</NavLinkMobile>
        </div>)}
    </NavContainer>
  )


}

const NavContainer = styled.nav`
  background: #111;
  z-index: 100;
  position: relative;
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
const NavLinkMobile = styled(Link)`
  display: block;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 4rem;
  padding: 1.5em 0;
  color: #fff;
`
