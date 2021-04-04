import React from 'react';
import styled from 'styled-components';
import Video from '../assets/videos/video2.mp4'

export default function Hero(){
  return(
    <HeroContainer>
      <HeroBg>
        <video src={Video} type="video/mp4" autoPlay loop muted>Your browser does not support the video tag.</video>
        <HeroText>
          <h1>Oscar Anillo</h1>
          <p>Web Developer</p>
        </HeroText>
      </HeroBg>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  margin: -80px 0 50px 0;
`
const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%:
  overflow: hidden;
  z-index: -1;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const HeroText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  text-align: center;
  padding: 3em 0;

  @media screen and (min-width: 800px){
    max-width: 30%;
  }

  h1 {
    color: #fff;
    font-size: 3rem;
  }
  p {
    color: #fff;
  }
`
