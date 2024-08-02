import { Card } from '../../../../components/Card';
import './styles.css';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'

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
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },

  }

  return (
    <section>
      <div className="section-4">
        <div className="section4__top">
          <h1 className="section4__title">Conheça nossa <span className="highlight">Equipe</span></h1>
        </div>
        <Carousel responsive={responsive}>
          {/* {data.map((item, index) => (
            <Card
              key={index}
              {...item}
            />
          ))} */}
          <Card {...data[0]} />
        </Carousel>

      </div>
    </section>
  );
}