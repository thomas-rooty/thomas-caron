import styles from './HeroAbout.module.css'
import Image from 'next/image'
import LaDefenseBackground from '../../public/assets/LaDefenseBackground.png'

const HeroAbout = () => {
  return (
    <>
      <div className={styles.hero}>
        <Image src={LaDefenseBackground} className={styles.heroImage} alt="La Defense" quality={100} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Hi, Thomas here</h1>
          <p className={styles.heroText}>
            I love to build things, especially when coding is part of the party
            <br />
            <br />
            I also enjoy riding my bike a unique way, so I'm used to fail and repeat until I succeed,
            <br />
            even if sometimes, it can hurt mentally or physically!
          </p>
        </div>
      </div>
    </>
  )
}

export default HeroAbout
