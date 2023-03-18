import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/button';
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {

  const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0 0 3px grey;
    transform: translateY(50%);
  }

  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .footer-bottom--section {
      padding-top: 9rem;
      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .footer-about{
    padding: 3rem 0;
  }
    .contact-short {
      max-width: 90vw;
      padding: 2rem 0rem;
      
      display: flex;
      justify-content: center;
      align-items: center;
      .contact-short-btn {
        text-align: center;
        justify-self: flex-start
      }
    }
    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
    }
  }`

  return (
    <>
    <Wrapper>
       <section className="contact-short">
        <div className='grid grid-two-column'>
          <div>
            <h3>Ready to get started</h3>
            <h3>Talk to us today</h3>
          </div>


          <div>
          <Button className='contact-short-btn'><NavLink to = "/">Get Started</NavLink></Button>
          </div>
        </div>
       </section>

       {/* Footer section */}
        <footer>
          <div className=' container grid grid-four-column'>
            <div className='footer-about'>
            <h3>TechGeeks360</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, fugit!</p>
            </div>

            {/* 2nd column */}
            <div className='footer-subscribe'>
            <h3>Subscribe to get important updates</h3>
            <form action="">
              <input type="email"name='email' autoComplete='off' required />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

           {/* 3nd column */}
           <div className='footer-social'>
            <h3>Follow Us</h3>
            <div className='footer-social--icons'>
                    <div>
                   <FaTwitter className='icons'/>
                    </div>
                    <div>
                   <FaInstagram className='icons'/>
                    </div>
                    <div>
                   <FaFacebook className='icons'/>
                    </div>
                    
            </div>
          </div>
           {/* 4th column  */}
           <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 12345678978</h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} TechGeeks360. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>



          </div>

        </footer>



    </Wrapper>
    
    </>
  )
}

export default Footer