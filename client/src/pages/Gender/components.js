import styled from 'styled-components';

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
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    background-color: #fff;
 
`;
export const Header = styled.p `
    text-align: center;
    margin: 20px auto;
    font-size: 3rem;
    font-family: "Nunito sans", sans-serif;

`;