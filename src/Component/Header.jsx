import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components'




const Header = () => {

  const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    height: auto;
    max-width: 30%;
    border-radius:5px

  }
  `;

  return (
    <>
    <MainHeader>
    <NavLink to = "/">
        <img src="./Images/logo3.png" alt="logo" srcset=""  className = "logo"/>
    </NavLink>

    <Navbar/>
    </MainHeader>
    </>
  )
}





export default Header