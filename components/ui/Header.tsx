import styles from './Header.module.css'
import ButtonWithImg from "./ButtonWithImg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.name__desc}>
          <h1 className={styles.name}>Thomas Caron</h1>
          <p className={styles.desc}>Fullstack Web Developer, 3D Programmer, <br/>Street Trial Athlete</p>
        </div>
        <div className={styles.buttons}>
          <ButtonWithImg href="/projects" text="Projects" imgSrc="/assets/projects.svg" imgAlt="Projects"/>
          <ButtonWithImg href="/about" text="About" imgSrc="/assets/about.svg" imgAlt="About"/>
        </div>
      </div>
    </header>
  )
}

export default Header;