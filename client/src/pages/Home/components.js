import styled from 'styled-components';
import bg from "../../images/mainBg1.jpg";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    @import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&');
    background-image: linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg}) ;
    
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    font-family: 'Secular One', sans-serif;
`;
export const Navbar = styled.div`
    width: 100%;
    height: 70px;
    /* background-color: #FF287E; */
    background-color: transparent;
    /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
    display: block;
    padding: 0px 10px;
`;
export const NavLeftContainer = styled.div `
    width: fit-content;
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
`;
export const NavLinkLeft = styled.a `
    color: #fff;
    margin-left: 40px;
    font-size: 1.4rem;
    font-family: 'Verdana';
    cursor: pointer;
    transition: 0.2s all ease;
    &:hover {
        color: #8c8c8c;
    }
`
export const MainLogo = styled.h3`
    font-size: 2rem;
    color: #fff;
    margin-left: 20px;
    width: fit-content;
`;
export const NavLinks = styled.ul`
    list-style-type: none;
    float: right;
    margin-right: 30px;
    margin-top: -30px;
    font-size: 1.6rem;
    font-family: 'Verdana';
    color: #fff !important;
    a {
        color: inherit;
    }
    @media screen and (max-width: 650px){
        display: none;
    }
`;
export const NavLink = styled.li`
    display: inline;
    margin: 0px 15px;
    font-size: 1.4rem;
    &:hover {
        cursor: pointer;
    }
    &:nth-child(2){
        border: 2px solid transparent;
        background-color: #ff5900;
        padding: 2px 5px;
        border-radius: 2px;
        transition: 0.2s all ease;
        &:hover {
            background-color: #d14900;
            cursor: pointer;
        }
    }
`;

export const MainBody = styled.div`
    height: calc(100vh - 70px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    h1 {
        color: #fff;
        font-size: 5rem;
        text-align: center;
    }
`;
export const MainBodyLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;
export const Image = styled.img`
    width: 640px;
    object-fit: cover;
`;
export const MainTagline = styled.p`
    font-family: 'Verdana';
    font-weight: 300;
    font-size: 1.8rem;
    text-align: center;
    color: #fff;
`;
export const Button = styled.button`
    background-color: #ff5900;
    color: #fff;
    display: flex;
    margin: 10px auto;
    border: none;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    padding: 12px 60px;
    border-radius: 30px;
    font-family: 'Verdana';
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 0.2s all ease;
    cursor: pointer;
    &:hover {
        background-color: #e32471;
    }
`;