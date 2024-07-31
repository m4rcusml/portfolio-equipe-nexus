import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link, useLocation } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';
import Logo from '../../assets/logo.svg';
import './styles.css';

const HomeNavigation = ({ onMobile = false }) => (
  <nav id={onMobile ? 'on-mobile' : 'menu'}>
    <Link to='#home'>Home</Link>
    <Link to='#contact'>Contactar</Link>
    <Link to='#projects'>Projetos</Link>
  </nav>
)

export function Header() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function toggleMenu() {
    setIsMenuOpened(prev => !prev);
  }

  return (
    <header id='header' style={{ height: (isSmallScreen && isMenuOpened) ? 144 : undefined }}>
      <img src={Logo} alt="Logo" width={140} />

      {!isSmallScreen && <HomeNavigation />}

      {isSmallScreen && (
        <>
          <button id='menu-hamburguer' onClick={toggleMenu}>
            {isMenuOpened
              ? <X size={32} color='white' className='icon reverse' />
              : <List size={32} color='white' className='icon' />}
          </button>
        </>
      )}

      {(isSmallScreen && isMenuOpened) && <HomeNavigation onMobile />}
    </header>
  )
}