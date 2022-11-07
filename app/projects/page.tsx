import styles from "./page.module.css";
import HeroProjects from "../../components/ui/HeroProjects";

const Projects = () => {
  return (
    <div className={styles.container}>
      <HeroProjects/>
    </div>
  )
}

export default Projects;