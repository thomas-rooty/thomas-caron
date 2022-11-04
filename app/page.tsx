import styles from './page.module.css'
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Header />
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Home;