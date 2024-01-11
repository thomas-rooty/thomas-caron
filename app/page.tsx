import styles from './page.module.css'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import Projects from './projects/page'
import About from './about/page'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Header />
      </div>
      <nav>
        <Footer />
      </nav>
      <main id="projects">
        <Projects />
      </main>
      <div  id="about">
        <About />
      </div>
    </div>
  )
}

export default Home
