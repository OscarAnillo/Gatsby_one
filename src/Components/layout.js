import React from 'react';
import { GlobalStyle } from '../styles/globalStyle';
import { Header } from './header.js';

export default function Layout({ children }){
  return(
    <div>
      <GlobalStyle />
      <Header />
      {children}
    </div>
  )
}
