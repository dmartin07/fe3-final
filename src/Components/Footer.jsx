import React from 'react'
import { ContextGlobal } from './utils/global.context';
import { useContext } from 'react';

const Footer = () => {

  const { state } = useContext(ContextGlobal);

  return (
    <footer className={state.theme}>
        <p>Powered by</p>
        <img src="./img/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
