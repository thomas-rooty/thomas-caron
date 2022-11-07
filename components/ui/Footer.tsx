import styles from './Footer.module.css'
import FooterButton from "./FooterButton";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__links}>
        <FooterButton href="mailto:tc.caron91@gmail.com" imgSrc={"/assets/mail.svg"} imgAlt="Mail"/>
        <FooterButton href="https://github.com/thomas-rooty" imgSrc={"/assets/github.svg"} imgAlt="Github"/>
        <FooterButton href="https://www.linkedin.com/in/dev-thomas-caron" imgSrc={"/assets/linkedin.svg"} imgAlt="LinkedIn"/>
        <FooterButton href={"https://www.instagram.com/tho_macaron"} imgSrc={"/assets/instagram.svg"} imgAlt="Instagram"/>
      </div>
    </footer>
  )
}

export default Footer;