import React, { useState } from 'react'
import { RegisterBox, RegisterWrapper, BoxLeft, BoxRight, Image, BoxLeftFooter, FormLabel, FormInput, SubmitButton, Span } from './components';
import Heart from "../../images/heart_particles.png";
import Loader from "../../components/Loader";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Login() {

  const [loader, setLoader] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(email);
    console.log(password);
    setLoader(true);
    axios.post('http://localhost:5000/login', {
      email,
      password
    })
      .then(res => {
        console.log(res);
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("email", email);
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
          <form onSubmit={handleSubmit}>
          <h1>Sign In to Your Account</h1>
          <FormLabel>E-mail</FormLabel>
          <FormInput type="email" placeholder="abc@example.com" onChange={e => setEmail(e.target.value)}/>
          <FormLabel>Password</FormLabel>
          <FormInput type="password" onChange={e => setPassword(e.target.value)}/>
          {!loader &&
            <SubmitButton onClick={handleSubmit} type="submit">Sign In</SubmitButton>}
          {loader && <Loader />}
          <Link to='/register'><Span>Don't have an account? Sign Up here.</Span></Link>
          </form>
        </BoxRight>
      </RegisterBox>
    </RegisterWrapper>
  )
}