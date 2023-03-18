import React from 'react'
import styled from 'styled-components';


const Contact = () => {
  const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  .container {
    margin-top: 6rem;
    text-align: center;
    .contact-form {
      max-width: 50rem;
      margin: auto;
      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;
          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;
  return (
    <Wrapper>
      <h2 className='common-heading'>Contact Us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2806.5215876801326!2d78.01871258719922!3d30.304119118657106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092a28a2ec3c65%3A0x6a757a4f2a52a761!2sPatel%20Nagar%2C%20Dehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1674310105976!5m2!1sen!2sin"
       width="100%" height="450" style= {{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

       <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xqkoawnr" method = "POST" className='contact-inputs'>
          <input type="text" name='username' placeholder='username' autoComplete='off' required />
            <input type="email" name='email' placeholder='email' autoComplete='off' required/>
            <textarea name="message" id="" cols="30" rows="10" placeholder='message' autoComplete='off' required></textarea>

            <input type="submit" value="send"/>

          </form>
        </div>
       </div>





      </Wrapper>
  )
}

export default Contact