import React from 'react'
import styled from 'styled-components';
 import { Button } from './styles/button';
 import { NavLink } from 'react-router-dom';

const Error = () => {

    const Wrapper = styled.section`
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
`;




  return (
    <Wrapper>
        <img src="Images/oops.jpg" alt="" className="src" style={{width:"40%"}} />
       {/* <NavLink to = "/"><Button className='btn'>Go Back</Button></NavLink>  */}
       <Button className='btn'><NavLink to = "/">Go Back</NavLink></Button>
        </Wrapper>
  )
}

export default Error