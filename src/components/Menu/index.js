import React from 'react';
import Logo from '../../assets/img/logo_guruflix.png';
import './menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <a href='/'>
        <img className='logo' src={Logo} alt='Guruflix logo'/>
      </a>

      <Button as="a" className="ButtonLink" href='/'>
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;