import styles from './Header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.name__desc}>
          <h1 className={styles.name}>Thomas Caron</h1>
          <p className={styles.desc}>Fullstack Web Developer, 3D Programmer, <br/>Street Trial Athlete</p>
        </div>
        <div className={styles.buttons}>
          <Link className={styles.button} href="/projects">
            <div className={styles.button__content}>
              <p className={styles.button__text}>Projects</p>
              <img className={styles.button__icon} src="/assets/projects.svg" alt="Projects icon"/>
            </div>
          </Link>
          <Link className={styles.button} href="/about">
            <div className={styles.button__content}>
              <p className={styles.button__text}>About</p>
              <img className={styles.button__icon} src="/assets/person.svg" alt="About icon"/>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header;