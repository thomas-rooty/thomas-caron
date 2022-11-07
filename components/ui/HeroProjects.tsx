import styles from "./HeroProjects.module.css";
import Image from "next/image";
import ProjectsBackground from "../../public/assets/ProjectsBackground.png";

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
            <div className={styles.tool}>HTML</div>
            <div className={styles.tool}>CSS</div>
            <div className={styles.tool}>JavaScript</div>
            <div className={styles.tool}>TypeScript</div>
            <div className={styles.tool}>Python</div>
          </div>
          <div className={styles.tools}>
            <div className={styles.tool}>Next</div>
            <div className={styles.tool}>React</div>
            <div className={styles.tool}>ThreeJS (R3F)</div>
            <div className={styles.tool}>Node</div>
            <div className={styles.tool}>Express</div>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default HeroProjects;