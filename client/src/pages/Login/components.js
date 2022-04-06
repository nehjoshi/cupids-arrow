import styled from "styled-components";

export const RegisterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100%;
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&family=Quicksand&family=Secular+One&display=swap');
    font-family: 'Secular One', sans-serif;
    align-items: center;
    background: rgb(2,0,36);
    background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(50,83,124,1) 35%);
`;
export const RegisterBox = styled.div`
    width: 50%;
    height: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    justify-content: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;
export const BoxLeft = styled.div`
    width: 40%;
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    position: relative;
    background-color: #FFE3EE;
    h1 {
        font-size: 3rem;
        color: #32537C;
    }
`;
export const BoxRight = styled.div`
    width: 60%;
    height: 100%;
    padding: 10px 40px;
    h1 {
        font-size: 2rem;
        text-align: center;
        color: #32537C;
        margin-bottom: 40px;
    }
`;
export const Image = styled.img`
    width: 600px;
    object-fit: cover;
`;
export const BoxLeftFooter = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: transparent;
    color: #b5b5b5;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial;
    height: 40px;
`;
export const FormLabel = styled.label`
    font-size: 1.5rem;
    color: #2e2e2e;
    font-weight: 600;
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap');
    font-family: "Nunito sans", sans-serif;

`;
export const FormInput = styled.input`
    width: 100%;
    height: 50px;
    border: 1px solid #cfcfcf;
    border-radius: 5px;
    padding: 0px 10px;
    font-size: 1.5rem;
    color: #000;
    &::placeholder {
        color: #ababab;
    }
    font-family: 'Nunito Sans', sans-serif;
    margin-bottom: 20px;
    &:hover {
        border: 1px solid #32537C;
    }
`;
export const SubmitButton = styled.button`
    width: 100%;
    height: 42px;
    outline: none;
    border: none;
    background-color: #FF287E;
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
    width: 100%;
    height: 42px;
    background-color: #FF287E;
    border-radius: 5px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
export const Span = styled.p`
    text-align: center;
    margin-top: 10px;
`;