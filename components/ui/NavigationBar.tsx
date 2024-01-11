import Link from 'next/link'
import styles from './NavigationBar.module.css'

const NavigationBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logo}>
        <Link href="#">
          web.<b>tcaron</b>.fr
        </Link>
      </div>
      <div className={styles.nav__links}>
        <Link href={"#projects"}>Projects</Link>
        <Link href={"#about"}>About me</Link>
      </div>
    </nav>
  )
}

export default NavigationBar
