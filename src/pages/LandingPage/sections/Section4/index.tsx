import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from '../../../../components/Card';
import './styles.css';

const banana = [
    {
        name: 'Nome',
        role: 'pog',
        github: 'https://github.com/Equipe-nexus/equipe-nexus-portifolio/blob/main/src/components/CardMembers/styles.css',
        behance: 'https://github.com/Equipe-nexus/equipe-nexus-portifolio/blob/main/src/components/CardMembers/styles.css',
        instagram: 'https://github.com/Equipe-nexus/equipe-nexus-portifolio/blob/main/src/components/CardMembers/styles.css',
    },
    {
        name: 'Nome',
        role: 'pog',
        github: 'https://github.com/Equipe-nexus/equipe-nexus-portifolio/blob/main/src/components/CardMembers/styles.css',
        behance: 'https://github.com/Equipe-nexus/equipe-nexus-portifolio/blob/main/src/components/CardMembers/styles.css',
        instagram: 'https://github.com/Equipe-nexus/equipe-nexus-portifolio/blob/main/src/components/CardMembers/styles.css',
    },
    {
        name: 'Nome',
        role: 'pog',
        github: 'https://github.com/Equipe-nexus/equipe-nexus-portifolio/blob/main/src/components/CardMembers/styles.css',
        behance: 'https://github.com/Equipe-nexus/equipe-nexus-portifolio/blob/main/src/components/CardMembers/styles.css',
        instagram: 'https://github.com/Equipe-nexus/equipe-nexus-portifolio/blob/main/src/components/CardMembers/styles.css',
    },
    {
        name: 'Nome',
        role: 'pog',
        github: 'https://github.com/Equipe-nexus/equipe-nexus-portifolio/blob/main/src/components/CardMembers/styles.css',
        behance: 'https://github.com/Equipe-nexus/equipe-nexus-portifolio/blob/main/src/components/CardMembers/styles.css',
        instagram: 'https://github.com/Equipe-nexus/equipe-nexus-portifolio/blob/main/src/components/CardMembers/styles.css',
    },
    {
        name: 'Nome',
        role: 'pog',
        github: 'https://github.com/Equipe-nexus/equipe-nexus-portifolio/blob/main/src/components/CardMembers/styles.css',
        behance: 'https://github.com/Equipe-nexus/equipe-nexus-portifolio/blob/main/src/components/CardMembers/styles.css',
        instagram: 'https://github.com/Equipe-nexus/equipe-nexus-portifolio/blob/main/src/components/CardMembers/styles.css',
    }
]

export function Section4() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <div className="section-4">
            <div className="section4__top">
                <h1 className="section4__title">Conheça nossa <span className="highlight">Equipe</span></h1>
            </div>
            <div className='teste'>
                <Slider {...settings}>
                    {banana.map((banana) => <Card values={banana} />)}
                </Slider>
            </div>
        </div>
    );
}