import Phone from '../../../../assets/phone.svg';
import './styles.css';

export function Section2() {
  return (
    <section>
      <div id='softhouse-explained'>
        <h1>Mas você sabe o que é uma Software house?</h1>
        <p>
          Uma <span>softhouse</span> é uma empresa especializada no desenvolvimento de software.
          Essas empresas podem se dedicar a diversas atividades relacionadas à criação
          de programas de computador, como a concepção, o design, a programação, o teste,
          a manutenção e a atualização de software.
        </p>
        <div className="blue-backblur" />
        <img src={Phone} alt="." />
      </div>
    </section>
  )
}