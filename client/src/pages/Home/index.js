import React from 'react'
import { Navbar, Wrapper, MainLogo, NavLinks, NavLink, MainBody, Image, MainBodyLeft, MainTagline, Button } from './components';
import { Link } from 'react-router-dom';
import Heart from "../../images/heart.png";

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
            <h1>Turning singles into couples.</h1>
            <MainTagline>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</MainTagline>
            <Link to="/register"><Button>Start Dating</Button></Link>
          </MainBodyLeft>
          <Image src={Heart} alt="heart" />
        </MainBody>
      </Navbar>
    </Wrapper>
  )
}
