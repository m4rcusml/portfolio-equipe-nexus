import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from '../../../../components/Card';
import './styles.css';

const data = [
    {
        image: 'https://via.placeholder.com/150',
        name: "John Doe",
        isMember: true,
        role: "Desenvolvedor Front-End",
        github: "https://github.com/johndoe",
        behance: "https://www.behance.net/johndoe",
        instagram: "https://www.instagram.com/johndoe",
    },
    {
        image: "https://via.placeholder.com/150",
        name: "John Biden",
        isMember: true,
        role: "Desenvolvedor Front-End",
        github: "https://github.com/johndoe",
        behance: "https://www.behance.net/johndoe",
        instagram: "https://www.instagram.com/johndoe",
    },
    {
        image: "https://via.placeholder.com/150",
        name: "Casimiro",
        isMember: true,
        role: "Desenvolvedor Front-End",
        github: "https://github.com/johndoe",
        behance: "https://www.behance.net/johndoe",
        instagram: "https://www.instagram.com/johndoe",
    },
]

export function Section4() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section>
            <div className="section-4">
                <div className="section4__top">
                    <h1 className="section4__title">Conheça nossa <span className="highlight">Equipe</span></h1>
                </div>
                <div className='slider-container'>
                    <Slider {...settings}>
                        {data.map((item, index) => (
                            <Card
                                key={index}
                                image={item.image}
                                name={item.name}
                                isMember={item.isMember}
                                role={item.role}
                                github={item.github}
                                behance={item.behance}
                                instagram={item.instagram}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}