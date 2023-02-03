import styles from './FooterButton.module.css'
import a from './Animations.module.css'

interface FooterButtonProps {
  href: string
  imgSrc: string
  imgAlt: string
}

const FooterButton = ({ href, imgSrc, imgAlt }: FooterButtonProps) => {
  return (
    <div className={`${styles.footer__icon} ${a.cssanimation} ${a.sequence} ${a.fadeInBottom}`}>
      <a href={href} target="_blank" rel="noreferrer">
        <img className={styles.icon} src={imgSrc} alt={imgAlt} />
      </a>
    </div>
  )
}

export default FooterButton
