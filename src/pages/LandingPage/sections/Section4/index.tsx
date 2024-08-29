import { Card } from '../../../../components/Card';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './styles.css';
import { useEffect, useState } from 'react';

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
  {
    image: "https://via.placeholder.com/150",
    name: "Ibson",
    isMember: true,
    role: "Desenvolvedor Front-End",
    github: "https://github.com/johndoe",
    behance: "https://www.behance.net/johndoe",
    instagram: "https://www.instagram.com/johndoe",
  },
]

export function Section4() {
    const [slidePercentage, setSlidePercentage] = useState(33);
    useEffect(() => {
        const updateSlidePercentage = () => {
            if (window.innerWidth < 768) {
                setSlidePercentage(100); 
            } else {
                setSlidePercentage(33); 
            }
        };

        window.addEventListener('resize', updateSlidePercentage);
        updateSlidePercentage();

        return () => {
            window.removeEventListener('resize', updateSlidePercentage);
        };
    }, []);

    return (
        <section>
            <div className="section-4">
                <div className="section4__top">
                    <h1 className="section4__title">Conheça nossa <span className="highlight">Equipe</span></h1>
                </div>
                <Carousel
                    centerMode={true}
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}
                    showArrows={true}
                    interval={5000}
                    className="slider-container"
                    emulateTouch={true}
                    swipeable={true}
                    centerSlidePercentage={slidePercentage}
                    infiniteLoop={true}
                >
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
                </Carousel>
            </div>
        </section>
    );
}
