import React from 'react';
import styled from 'styled-components';


export default function Contact(){
  return(
    <ContactContainer>
      <ContactWrapper>
        <form action="mailto:oscarani14@gmail.com" method="POST" autoComplete="off">
        <h1>Contact me</h1>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required/>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" required />
        <label htmlFor="message">Message</label>
        <br />
        <textarea></textarea>
        <input type="submit" value="Send" required style={{display: 'inline-block', border:'none', borderRadius: 5, width: '50%', margin: '.5em auto', background: '#111', color: '#fff', padding: '1em 0', textTransform: 'uppercase', letterSpacing: 5, cursor: 'pointer'}}/>
        </form>
      </ContactWrapper>
    </ContactContainer>
  )
}

const ContactContainer = styled.div`
  background: linear-gradient(to bottom, #111 50%, coral 50%);
  height: 100vh;
  position: relative;
`
const ContactWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;


  form {
    background: #fff;
    padding: 3em 1em;
  }
  h1 {
    text-align: center;
    text-transform: uppercase;
    padding: 1em;
  }
  label {
    color: #bbb;
  }
  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #111;
    margin: .3em 0;
    padding: 1em 0;
    outline: none;

  }
  textarea {
    width: 100%;
    resize: none;
    margin: .3em 0;
    border: none;
    border-bottom: 1px solid #111;
    outline: none;
  }

  @media screen and (min-width: 768px){
    max-width: 500px;
  }
`
