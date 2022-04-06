import styled from 'styled-components';
import {FaMale, FaFemale} from 'react-icons/fa';

export const Wrapper = styled.div `
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap');
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgb(2,0,36);
    background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(50,83,124,1) 35%);
    font-family: "Nunito sans", sans-serif;
`;
export const Box = styled.div`
    width: 60%;
    height: 600px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    background-color: #fff;
    padding: 5px 5px;
 
`;
export const Header = styled.p `
    text-align: center;
    margin: 20px auto;
    font-size: 3rem;
    font-family: "Nunito sans", sans-serif;
`;
export const GenderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: fit-content;
    justify-content: space-around;
`;
export const GenderBox = styled.div `
    width: 50%;
    height: fit-content;
    display: flex;
    margin-top: 50px;
    justify-content: center;
`;
export const MaleIcon = styled(FaMale) `
    font-size: 10rem;
    transition: 0.2s all ease;
    &:hover {
        cursor: pointer;
        color: #ffc107;
    }
    &:active {
        color: rgb(2,0,36);
    }
`;
export const FemaleIcon = styled(FaFemale) `
    font-size: 10rem;
    transition: 0.2s all ease;
    &:hover {
        cursor: pointer;
        color: #ffc107;
    }
    &:active {
        color: rgb(2,0,36);
    }
`;
export const SubmitButton = styled.button`
    width: 60%;
    height: 42px;
    outline: none;
    border: none;
    background-color: #FF287E;
    margin: 100px auto;
    border-radius: 5px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: 0.2s all ease;
    font-size: 1.3rem;
    &:hover {
        cursor: pointer;
        background-color: #e0226e;
    }
    &:active {
        background-color: #d01e6c;
    }
`;
export const SubmitButtonDisabled = styled.div`
    width: 60%;
    height: 42px;
    outline: none;
    border: none;
    background-color: #FF287E;
    margin: 100px auto;
    border-radius: 5px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    transition: 0.2s all ease;
    font-size: 1.3rem;
    opacity: 0.3;
`;