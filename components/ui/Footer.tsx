import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__links}>
        <div className={styles.footer__icon}>
          <a href="mailto:tc.caron91@gmail.com">
            <img className={styles.icon} src={"/assets/mail.svg"} alt="Mail"/>
          </a>
        </div>
        <div className={styles.footer__icon}>
          <a href="https://github.com/thomas-rooty" target={"_blank"} rel="noreferrer">
            <img className={styles.icon} src={"/assets/github.svg"} alt="Github"/>
          </a>
        </div>
        <div className={styles.footer__icon}>
          <a href="https://www.linkedin.com/in/dev-thomas-caron" target={"_blank"} rel="noreferrer">
            <img className={styles.icon} src={"/assets/linkedin.svg"} alt="LinkedIn"/>
          </a>
        </div>
        <div className={styles.footer__icon}>
          <a href="https://www.instagram.com/tho_macaron">
            <img className={styles.icon} src={"/assets/instagram.svg"} alt="Instagram"/>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;