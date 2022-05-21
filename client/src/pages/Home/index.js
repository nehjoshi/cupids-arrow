import React from 'react'
import { Navbar, Wrapper, MainLogo, NavLinks, NavLink, MainBody, MainBodyLeft, MainTagline, Button, NavLeftContainer, NavLinkLeft } from './components';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Wrapper>
      <Navbar>
        <NavLeftContainer>
          <MainLogo>Cupid's Arrow</MainLogo>
          <NavLinkLeft>History</NavLinkLeft>
          <NavLinkLeft>Learn</NavLinkLeft>
          <NavLinkLeft>Privacy Policy</NavLinkLeft>
          <NavLinkLeft>Help</NavLinkLeft>
        </NavLeftContainer>
        <NavLinks>
          {/* <NavLink>Home</NavLink> */}
          <NavLink>About</NavLink>
          <NavLink><Link to='/login'>Login</Link></NavLink>
          {/* <NavLink><Link to='/register'>Register</Link></NavLink> */}
        </NavLinks>
        <MainBody>
          <MainBodyLeft>
            <h1>Because we care about love.</h1>
            <MainTagline>Your gateway to safe, secure and long-lasting relationships.</MainTagline>
            <Link to="/register"><Button>Start Dating</Button></Link>
          </MainBodyLeft>
          {/* <Image src={Heart} alt="heart" /> */}
        </MainBody>
      </Navbar>
    </Wrapper>
  )
}
