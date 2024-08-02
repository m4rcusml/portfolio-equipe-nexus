import { BehanceLogo, GithubLogo, InstagramLogo } from '@phosphor-icons/react';
import './styles.css';

interface CommonProps {
  image: string;
  name: string;
}

interface MemberProps extends CommonProps {
  isMember: boolean;
  role?: string;
  github?: string;
  behance?: string;
  instagram?: string;
  isService?: never;
  isProject?: never;
}

interface ServiceProps extends CommonProps {
  isService: boolean;
  serviceTitle?: string;
  serviceList?: string[];
  isMember?: never;
  isProject?: never;
}

interface ProjectProps extends CommonProps {
  isProject: boolean;
  description?: string;
  projectLead?: {
    name: string;
    photo: string;
  };
  isMember?: never;
  isService?: never;
}

type CardProps = MemberProps | ServiceProps | ProjectProps;

export function Card(props: CardProps) {

  const cardClass = props.isService ? 'card service-card' : 'card';

  return (
    <div className={cardClass}>
      <img src={props.image} alt={props.name} className="image-placeholder" />
      <div className="card__container">
        <h1 className="card__name">{props.name}</h1>

        {props.isMember && (
          <>
            <h2 className="member_function">{props.role}</h2>
            <ul className="social-links">
              {props.github && (
                <li>
                  <a className="social__itens" href={props.github} target="_blank" rel="noopener noreferrer">
                    <div className="icon-placeholder"><GithubLogo color='white' /></div>Github
                  </a>
                </li>
              )}
              {props.behance && (
                <li>
                  <a className="social__itens" href={props.behance} target="_blank" rel="noopener noreferrer">
                    <div className="icon-placeholder"><BehanceLogo color='white' /></div>Behance
                  </a>
                </li>
              )}
              {props.instagram && (
                <li>
                  <a className="social__itens" href={props.instagram} target="_blank" rel="noopener noreferrer">
                    <div className="icon-placeholder"><InstagramLogo color='white' /></div>Instagram
                  </a>
                </li>
              )}
            </ul>
          </>
        )}

        {props.isService && (
          <>
            <ul className="service_list">
              {props.serviceList && props.serviceList.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </>
        )}

        {props.isProject && (
          <>
            <p className="project_description">{props.description}</p>
            {props.projectLead && (
              <div className="project_lead">
                <img src={props.projectLead.photo} alt={props.projectLead.name} className="lead_photo" />
                <p className="lead_name">{props.projectLead.name}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
