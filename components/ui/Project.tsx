import styles from "./Project.module.css";
import ToolButton from "./ToolButton";
import ButtonWithImg from "./ButtonWithImg";

interface ProjectProps {
  title: string;
  description: string;
  details: string;
  image: string;
  link: string;
  github: string;
  tools: string[];
}

const Project = ({title, description, details, image, link, github, tools}: ProjectProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.project}>
        <div className={styles.leftSection}>
          <div className={styles.titleSection}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <div className={styles.tools}>
              <ToolButton tools={tools}/>
            </div>
          </div>
          <div className={styles.detailsSection}>
            <p className={styles.details}>{details}</p>
          </div>
          <div className={styles.linksSection}>
            <ButtonWithImg href={github} target={'_blank'} text="GitHub Project" imgSrc="/assets/github.svg" imgAlt="Github"/>
            <ButtonWithImg href={link} target={'_blank'} text="Live Site" imgSrc="/assets/link.svg" imgAlt="Link"/>
          </div>
        </div>
        <div className={styles.rightSection}>
          <img className={styles.image} src={image} alt={title}/>
        </div>
      </div>
    </div>
  );
}

export default Project;