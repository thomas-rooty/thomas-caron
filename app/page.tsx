import styles from './page.module.css'
import Footer from "../components/ui/Footer";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>Homepage</h1>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Home;