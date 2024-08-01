import { BehanceLogo, GithubLogo, InstagramLogo } from '@phosphor-icons/react';
import './styles.css';

interface CardProps {
  name : string;
  role: string;
  github: string;
  behance: string;
  instagram: string;
}

interface props {
  values: CardProps;
}

export function Card({ values }: props) {
  return (
    <div className="card">
      <div className="image-placeholder"></div>
      <div className='card__container' >
        <h1 className='member_name' >{values.name}</h1>
        <h2 className='member_function' >{values.role}</h2>
        <ul className="social-links">
          <li>
            <a className='social__itens' href={values.github} target="_blank" rel="github">
              <div className="icon-placeholder"><GithubLogo color='white' /></div>Github
            </a>
          </li>
          <li>
            <a className='social__itens' href={values.behance} target="_blank" rel="behance">
              <div className="icon-placeholder"><BehanceLogo color='white' /></div>Behance
            </a>
          </li>
          <li>
            <a className='social__itens' href={values.instagram} target="_blank" rel="instagram">
              <div className="icon-placeholder"><InstagramLogo color='white' /></div>Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
