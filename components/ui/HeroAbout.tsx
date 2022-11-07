import styles from "./HeroAbout.module.css";
import Image from "next/image";
import LaDefenseBackground from "../../public/assets/LaDefenseBackground.png";
import FooterButton from "./FooterButton";

const HeroAbout = () => {
  return <>
    <div className={styles.hero}>
      <Image
        src={LaDefenseBackground}
        className={styles.heroImage}
        alt="La Defense"
        quality={100}
      />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Hi, Thomas here</h1>
        <p className={styles.heroText}>Passionate about IA, web development and 3D.<br/>
          I also enjoy riding my bike a specific way, so I'm used to fail and repeat until I succeed,<br/>
          even if sometimes, it can hurt mentally or physically!</p>
        <div className={styles.heroLinks}>
          <FooterButton href="mailto:tc.caron91@gmail.com" imgSrc={"/assets/mail.svg"} imgAlt="Mail"/>
          <FooterButton href="https://github.com/thomas-rooty" imgSrc={"/assets/github.svg"} imgAlt="Github"/>
          <FooterButton href="https://www.linkedin.com/in/dev-thomas-caron" imgSrc={"/assets/linkedin.svg"}
                        imgAlt="LinkedIn"/>
          <FooterButton href={"https://www.instagram.com/tho_macaron"} imgSrc={"/assets/instagram.svg"}
                        imgAlt="Instagram"/>
        </div>
      </div>
    </div>
  </>;
}

export default HeroAbout;