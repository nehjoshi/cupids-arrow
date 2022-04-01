import React from 'react'
import { Navbar, Wrapper, MainLogo, NavLinks, NavLink, MainBody, Image, MainBodyLeft, MainTagline } from './components';
import Heart from "../../images/heart.jpg";

export default function Home() {
  return (
    <Wrapper>
      <Navbar>
        <MainLogo>Cupid's Arrow</MainLogo>
        <NavLinks>
          <NavLink>Home</NavLink>
          <NavLink>Login</NavLink>
          <NavLink>Register</NavLink>
          <NavLink>About</NavLink>
        </NavLinks>
        <MainBody>
          <MainBodyLeft>
            <h1>Where hearts meet.</h1>
            <MainTagline>Lorem ipsum dolor sit amet.</MainTagline>
          </MainBodyLeft>
          <Image src={Heart} alt="heart" />
        </MainBody>
      </Navbar>
    </Wrapper>
  )
}
