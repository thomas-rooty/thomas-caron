import Link from 'next/link'
import styles from './NavigationBar.module.css'

const NavigationBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logo}>
        <Link href="/">
          Thomas Caron <b>Portfolio</b>
        </Link>
      </div>
      <div className={styles.nav__links}>
        <Link href={"/projects"}>PROJECTS</Link>
        <Link href={"/about"}>ABOUT</Link>
      </div>
    </nav>
  )
}

export default NavigationBar
