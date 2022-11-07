import styles from './FooterButton.module.css';

interface FooterButtonProps {
  href: string;
  imgSrc: string;
  imgAlt: string;
}

const FooterButton = ({ href, imgSrc, imgAlt }: FooterButtonProps) => {
  return (
    <div className={styles.footer__icon}>
      <a href={href}>
        <img className={styles.icon} src={imgSrc} alt={imgAlt}/>
      </a>
    </div>
  )
}

export default FooterButton;