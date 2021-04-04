import React from 'react';
import styled from 'styled-components';


export default function Contact(){
  return(
    <ContactContainer>
      <ContactWrapper>
        <form action="mailto:oscarani14@gmail.com" method="POST" autocomplete="off">
        <h1>Contact me</h1>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required/>
        <label for="email">Email</label>
        <input type="text" id="email" name="email" required />
        <label for="message">Message</label>
        <br />
        <textarea></textarea>
        <input type="submit" value="Send" required style={{display: 'inline-block', border:'none', width: '50%', margin: 'auto', background: 'coral', color: '#fff', padding: '1em 0', textTransform: 'uppercase'}}/>
        </form>
      </ContactWrapper>
    </ContactContainer>
  )
}

const ContactContainer = styled.div`
  background: linear-gradient(to bottom, #111 50%, lightblue 50%);
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
    margin-bottom: 1em;
    border: none;
    border-bottom: 1px solid #111;
    outline: none;
  }
`
