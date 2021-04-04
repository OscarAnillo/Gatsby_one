import React from 'react';
import styled from 'styled-components';
import { places } from '../data/placesData'
import {ImLocation} from 'react-icons/im'

export default function Places(props){
    return(
        <PlacesContainer>
            <PlacesWrapper>
              <h1>Places I want to visit</h1>
              <p>These are just a few...</p>
            {places.map((x) => (
              <PlacesMap key={x.id}>
              <img src={x.image} alt="" />
              <PlacesMapName style={{color: '#fff'}}>
                <ImLocation />
                <h3>{x.title}</h3>
              </PlacesMapName>
              </PlacesMap>
            ))}
            </PlacesWrapper>
        </PlacesContainer>
    )
}

const PlacesContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    position: relative;
`
const PlacesWrapper = styled.div`
    width: 85%;
    margin: auto;

    h1 {
      text-transform: uppercase;
      text-shadow: 1px 1px 1px #000;
      color: #A6FFE5;
      margin-bottom: .3em;
      font-size: clamp(2rem, 5vw, 3rem)
    }

    p {
      font-size: clamp(1rem, 5vw, 1.3rem);
      margin-bottom: 1em;
    }
`
const PlacesMap = styled.div`
    margin: .5em 0;
    position: relative;

  img {
    max-width: 100%
  }
  h3 {
    color: #fff;
    text-shadow: 1px 1px 1px #000;
  }

  @media screen and (min-width: 768px){
    display: inline-block;
    width: 47%;
    margin: .5em;

    }
`
const PlacesMapName = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-start;
  position: absolute;
  top: 70%;

  @media screen and (min-width: 768px){
      top: 80%;

  }
`
