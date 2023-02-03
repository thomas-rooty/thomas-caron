import styles from './page.module.css'
import HeroAbout from '../../components/ui/HeroAbout'
import AboutContent from '../../components/ui/AboutContent'

const About = () => {
  return (
    <div className={styles.container}>
      <HeroAbout />
      <AboutContent />
    </div>
  )
}

export default About
