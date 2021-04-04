import React from 'react';
import styled from 'styled-components';
import Greet from '../Components/aboutGreet';
import Image from '../assets/images/me.jpg';

export default function About(){
  return(
    <AboutContainer>
      <AboutWrapper>
        <AboutText>
          <h1>Oscar Anillo</h1>
          <p>Web Developer</p>
        </AboutText>
        <AboutFlex>
          <Greet />
          <AboutImage src={Image}/>
        </AboutFlex>
      </AboutWrapper>
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
  min-height: 100vh;
  background: #111;
`
const AboutWrapper  = styled.div`
  width: 90%;
  margin: auto;
`

const AboutText = styled.div`
  text-align: left;
  h1 {
    padding-top: 2em;
    color: #fff;
  }
  p {
    color: #fff;
    margin: 1em 0;
  }
`
const AboutFlex = styled.div`
  display: block;

  @media screen and (min-width: 768px){
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
  @media screen and (min-width: 1000px){
    justify-content: space-around;

  }
`
const AboutImage = styled.img`
  height: 450px;
  width: 100%;
  border-radius: 500px;

  @media screen and (min-width: 768px){
    height: 560px;
    width: 45%;
    margin-right: 1em;
  }

  @media screen and (min-width: 1000px){
    height: 700px;
    max-width: 30%;
  }
`
