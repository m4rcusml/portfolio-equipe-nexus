import { Card } from '../../../../components/Card';
import './styles.css';

const data = [
    {
        "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMLBJQcs8qS1dSICQfj1e8BHQh5Cnbfna_Y_6ueaPUhKU5esht',
        "name": "Design Gráfico",
        "isService": true,
        "serviceTitle": "Serviço de Design",
        "serviceList": [
            "Criação de Logotipos",
            "Design de Interfaces",
            "Materiais Promocionais"
        ]
    },
    {
        "image": "https://via.placeholder.com/150",
        "name": "Desenvolvimento Web",
        "isService": true,
        "serviceTitle": "Desenvolvimento de Websites",
        "serviceList": [
            "Desenvolvimento Front-End",
            "Desenvolvimento Back-End",
            "Manutenção e Suporte"
        ]
    },
    {
        "image": "https://via.placeholder.com/150",
        "name": "Consultoria em TI",
        "isService": true,
        "serviceTitle": "Consultoria em Tecnologia",
        "serviceList": [
            "Auditoria de Sistemas",
            "Implementação de Soluções",
            "Treinamento e Capacitação"
        ]
    },
    {
        "image": "https://via.placeholder.com/150",
        "name": "Teste",
        "isService": true,
        "serviceTitle": "Consultoria em Tecnologia",
        "serviceList": [
            "Auditoria de Sistemas",
            "Implementação de Soluções",
            "Treinamento e Capacitação"
        ]
    }
]

export function Section5() {

    return (
        <section>
            <div className="section-5">
                <div className="section5__top">
                    <h1 className="section5__title">Nossos <span className="bottomline">Serviços</span></h1>
                </div>
            </div>
        </section>
    );
}