import { EnvelopeOpen, InstagramLogo, Phone } from '@phosphor-icons/react';
import './styles.css';
import { Button } from '../../../../components/Button/index';



export function Section7() {
  return (
    <section className='Section7Container'>
      <div className='Contact'>
        <span className='hightitle'>Se interessou?</span>
        <h1 className='ContactTitle'>Entre em contato <span className='bottomContactTitle'>conosco</span></h1>
        <div className='social'>
          <div className="social-icon">
            <Phone size={32} />
            <p className='iconText'>92 98620-6811</p>
          </div>
          <div className="social-icon">
            <InstagramLogo size={32} />
            <p className='iconText'>equipe_nxs</p>
          </div>
          <div className="social-icon">
            <EnvelopeOpen size={32} />
            <p className='iconText'>nxsskill@gmail.com</p>
          </div>
        </div>
      </div>
      <Button filled>
        Solicitar serviços
      </Button>
    </section>
  )
}