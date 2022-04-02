import React, { useState } from 'react'
import { RegisterBox, RegisterWrapper, BoxLeft, BoxRight, Image, BoxLeftFooter, FormLabel, FormInput, SubmitButton } from './components';
import Heart from "../../images/heart_particles.png";
import Loader from "../../components/Loader";
import axios from "axios";

export default function Register() {

  const [loader, setLoader] = useState(false);

  const handleSubmit = () => {
    setLoader(true);
    axios.post('http://localhost:5000/register', {
      email: "nehjoshi5@gmail.com",
      name: "Nehjoshi",
      password: "12345678"
    })
      .then(res => {
        console.log(res);
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
          <h1>Sign Up to Get Started</h1>
          <FormLabel>Name</FormLabel>
          <FormInput type="text" placeholder="Name" />
          <FormLabel>E-mail</FormLabel>
          <FormInput type="text" placeholder="abc@example.com" />
          <FormLabel>Password</FormLabel>
          <FormInput type="password" />
          <FormLabel>Confirm Password</FormLabel>
          <FormInput type="password" />
          {!loader &&
            <SubmitButton onClick={handleSubmit}>Sign Up</SubmitButton>}
          {loader && <Loader />}
        </BoxRight>
      </RegisterBox>
    </RegisterWrapper>
  )
}