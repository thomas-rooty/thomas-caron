'use client'
import styles from './Footer.module.css'
import FooterButton from './FooterButton'
import { useState } from 'react'

const Footer = () => {
  const [isShown, setIsShown] = useState(true)

  return (
    <>
      <button className={`${styles.footer__button} ${!isShown ? styles.footer__button__hide : ''}`} onClick={() => setIsShown(!isShown)}>
        <img src={'/assets/arrow-up.svg'} alt="Arrow" />
      </button>
      <footer className={`${styles.footer} ${!isShown ? styles.footer__hide : ''}`}>
        <div className={styles.footer__links}>
          <FooterButton href="https://github.com/thomas-rooty" imgSrc={'/assets/github.svg'} imgAlt="Github" />
          <FooterButton href="https://www.linkedin.com/in/dev-thomas-caron" imgSrc={'/assets/linkedin.svg'} imgAlt="LinkedIn" />
          <FooterButton href={'https://www.instagram.com/tho_macaron'} imgSrc={'/assets/instagram.svg'} imgAlt="Instagram" />
          <FooterButton href="mailto:tc.caron91@gmail.com" imgSrc={'/assets/mail.svg'} imgAlt="Mail" />
          <FooterButton href={'https://github.com/thomas-rooty/thomas-caron/raw/main/public/assets/CV%20Thomas%20CARON%20-%202023.pdf'} imgSrc={'/assets/download.svg'} imgAlt="CV" />
        </div>
      </footer>
    </>
  )
}

export default Footer
