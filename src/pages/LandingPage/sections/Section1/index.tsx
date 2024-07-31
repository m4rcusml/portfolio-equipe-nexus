import { ChatBox } from './components/ChatBox';
import { Button } from '../../../../components/Button';
import ShortLogo from '../../../../assets/short-logo.svg';
import './styles.css';

export function Section1() {
  return (
    <section>
      <div className='blue-blur um' />
      <div className='white-blur um' />
      <div className='blue-blur dois' />
      <div className='white-blur dois' />

      <div id='presentation'>
        <img src={ShortLogo} alt='.' className='shortlogo' />
        <h1>Equipe-Nexus</h1>
        <div>
          <h2>A equipe que pode alavancar seu negócio!</h2>
          <Button filled>
            Ver serviços
          </Button>
        </div>
      </div>

      <div id='what-is'>
        <ChatBox
          content='O que é o Equipe-Nexus?'
        />
        <ChatBox
          content='Nós somos uma software house!'
          alignSelf='flex-end'
        />
      </div>
    </section>
  )
}