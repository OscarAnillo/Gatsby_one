import React from 'react';
import styled from 'styled-components';

export default function Greet(){
  return(
    <AboutInfo>
      <h1>Hello, <span><br />a bit about me:</span></h1>
        <div>
          <AboutResume>My Resume</AboutResume>
          <AboutWork>My Work</AboutWork>
          <AboutSkills>My Skills</AboutSkills>
          </div>
          <p>I'm a full-stack Developer located in South America, Colombia. I have worked mostly with abroad clients for develivering, creating and deploying great applications on the current market. I own a C2 level in English which allows me to communicate with my clients and tackle their issue even before they ask me or they see it.</p>
      </AboutInfo>

  )
}

const AboutInfo = styled.div`
  display: block;
  text-align: left;

  h1 {
    color: #fff;
    padding: 1em 0 .5em 0;
    font-size: 4rem;
    margin: 0;
  }
  h1 span {
    font-size: 1.3rem;
  }
  div {
    display: flex;
  }
  p {
    color: #fff;
    line-height: 1.2em;
    text-align: justify;
    padding: 1em 0;
  }

  @media screen and (min-width: 1000px){
    width: 40%;
  }
`
const AboutResume = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em auto;
`
const AboutWork = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em auto;
`
const AboutSkills = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background: limegreen;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em auto;
`
