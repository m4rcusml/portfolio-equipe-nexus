import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './styles.css';	

export function Header() {
  return (
    <header id='header'>
      <img src={Logo} alt="Logo" width={140} />

      <nav id='menu'>
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projetos</Link>
        <Link to='/contact'>Contato</Link>
      </nav>
    </header>
  )
}