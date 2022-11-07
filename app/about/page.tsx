import styles from './page.module.css'
import Hero from "../../components/ui/Hero";
import AboutContent from "../../components/ui/AboutContent";

const About = () => {
  return (
    <div className={styles.container}>
      <Hero/>
      <AboutContent/>
    </div>
  )
}

export default About;