import React, { useState } from 'react'
import { RegisterBox, RegisterWrapper, BoxLeft, BoxRight, Image, BoxLeftFooter, FormLabel, FormInput, SubmitButton } from './components';
import Heart from "../../images/heart_particles.png";
import Loader from "../../components/Loader";
import axios from "axios";

export default function Register() {

  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    if (confirmPassword === password) {
      setLoader(true);
      axios.post('http://localhost:5000/register', {
        email: email,
        name: name,
        password: password
      })
        .then(res => {
          console.log(res);
          sessionStorage.setItem("token", res.data.token);
          setLoader(false);
        });
    }
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
          <FormInput type="text" placeholder="Name" onChange={e => setName(e.target.value)}/>
          <FormLabel>E-mail</FormLabel>
          <FormInput type="text" placeholder="abc@example.com" onChange={e => setEmail(e.target.value)}/>
          <FormLabel>Password</FormLabel>
          <FormInput type="password" onChange={e => setPassword(e.target.value)}/>
          <FormLabel>Confirm Password</FormLabel>
          <FormInput type="password" onChange={e => setConfirmPassword(e.target.value)} />
          {!loader &&
            <SubmitButton onClick={handleSubmit}>Sign Up</SubmitButton>}
          {loader && <Loader />}
        </BoxRight>
      </RegisterBox>
    </RegisterWrapper>
  )
}