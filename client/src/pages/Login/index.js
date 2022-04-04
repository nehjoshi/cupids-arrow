import React, { useState } from 'react'
import { RegisterBox, RegisterWrapper, BoxLeft, BoxRight, Image, BoxLeftFooter, FormLabel, FormInput, SubmitButton, Span } from './components';
import Heart from "../../images/heart_particles.png";
import Loader from "../../components/Loader";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Login() {

  const [loader, setLoader] = useState(false);

  const handleSubmit = () => {
    setLoader(true);
    axios.post('http://localhost:5000/login', {
      email: "nehjoshi5@gmail.com",
      name: "Nehjoshi",
      password: "12345678"
    })
      .then(res => {
        console.log(res);
        sessionStorage.setItem("token", res.data.token);
        setLoader(false);
      });
  }

  return (
    <RegisterWrapper>
      <RegisterBox>
        <BoxLeft>
          <h1>Cupid's Arrow</h1>
          <Image src={Heart} alt="Heart" />
          <BoxLeftFooter>Terms and Conditions Apply</BoxLeftFooter>
        </BoxLeft>
        <BoxRight>
          <h1>Sign In to Your Account</h1>
          <FormLabel>E-mail</FormLabel>
          <FormInput type="text" placeholder="abc@example.com" />
          <FormLabel>Password</FormLabel>
          <FormInput type="password" />
          {!loader &&
            <SubmitButton onClick={handleSubmit}>Sign In</SubmitButton>}
          {loader && <Loader />}
          <Link to='/register'><Span>Don't have an account? Sign Up here.</Span></Link>
        </BoxRight>
      </RegisterBox>
    </RegisterWrapper>
  )
}