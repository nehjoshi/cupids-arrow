import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    @import url('https://fonts.googleapis.com/css2?family=Secular+One&display=swap');
    font-family: 'Secular One', sans-serif;
`;
export const Navbar = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FF287E;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: block;
    padding: 0px 10px;
`;
export const MainLogo = styled.h3`
    font-size: 1.5rem;
    color: #fff;
    margin-top: 16px;
    margin-left: 20px;
    width: fit-content;
`;
export const NavLinks = styled.ul`
    list-style-type: none;
    float: right;
    margin-right: 30px;
    margin-top: -30px;
    font-size: 1.3rem;
    color: #fff;
    @media screen and (max-width: 650px){
        display: none;
    }
`;
export const NavLink = styled.li`
    display:  inline;
    margin: 0px 15px;
    &:hover {
        cursor: pointer;
    }
`;
export const MainBody = styled.div`
    height: calc(100vh - 70px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    h1 {
        color: #32537C;
        font-size: 5rem;
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
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&family=Quicksand&family=Secular+One&display=swap');
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.4rem;
    color: #424242;
`;
export const Button = styled.button`
    background-color: #FF287E;
    color: #fff;
    display: flex;
    margin: 10px auto;
    border: none;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    padding: 12px 60px;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 0.2s all ease;
    cursor: pointer;
    &:hover {
        background-color: #e32471;
    }
`;