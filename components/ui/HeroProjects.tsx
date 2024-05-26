import styles from './HeroProjects.module.css'
import a from './Animations.module.css'
import Image from 'next/image'
import ProjectsBackground from '../../public/assets/ProjectsBackground.png'
import ToolButton from './ToolButton'

const HeroProjects = () => {
  return (
    <>
      <div className={styles.hero}>
        <Image src={ProjectsBackground} className={styles.heroImage} alt="R3F World" quality={100} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Featured Work</h1>
          <p className={styles.heroText}>
            Developing web applications, 3D interactive web experiences, or just simpler websites.
            <br />
            Check my GitHub for more projects.
          </p>
          <div className={styles.toolkit}>
            <div className={styles.toolTitle}>
              <h2>Toolkit</h2>
            </div>
            <div className={`${styles.tools} ${a.cssanimation} ${a.sequence} ${a.fadeInLeft}`}>
              <ToolButton tools={['JS/TypeScript', 'Python', 'PHP', 'HTML', 'CSS']} />
            </div>
            <div className={`${styles.tools} ${a.cssanimation} ${a.sequence} ${a.fadeInLeft}`}>
              <ToolButton tools={['Node.js', 'Socket.io/uWs', 'Tensorflow']} />
            </div>
            <div className={`${styles.tools} ${a.cssanimation} ${a.sequence} ${a.fadeInLeft}`}>
              <ToolButton tools={['Next.js', 'React', 'Three.js']} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroProjects
