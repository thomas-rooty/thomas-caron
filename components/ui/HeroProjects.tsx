import styles from "./HeroProjects.module.css";
import Image from "next/image";
import ProjectsBackground from "../../public/assets/ProjectsBackground.png";
import ToolButton from "./ToolButton";

const HeroProjects = () => {
  return <>
    <div className={styles.hero}>
      <Image
        src={ProjectsBackground}
        className={styles.heroImage}
        alt="La Defense"
        quality={100}
      />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Featured Work</h1>
        <p className={styles.heroText}>Developing 3D interactive experiences for the web, or simpler websites.</p>
        <div className={styles.toolkit}>
          <div className={styles.toolTitle}>
            <h2>Toolkit</h2>
          </div>
          <div className={styles.tools}>
            <ToolButton tools={["HTML", "CSS", "JavaScript", "TypeScript", "Python"]}/>
          </div>
          <div className={styles.tools}>
            <ToolButton tools={["Next", "React", "ThreeJS (R3F)", "Node", "Express"]}/>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default HeroProjects;