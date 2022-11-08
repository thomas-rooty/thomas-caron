import styles from './ButtonWithImg.module.css';
import Link from 'next/link';

interface ButtonWithImgProps {
  href: string;
  text: string;
  imgSrc: string;
  imgAlt: string;
}

const ButtonWithImg = ({ href, text, imgSrc, imgAlt }: ButtonWithImgProps) => {
  return (
    <Link className={styles.button} href={href} target={'_blank'}>
      <div className={styles.button__content}>
        <p className={styles.button__text}>{text}</p>
        <img className={styles.button__icon} src={imgSrc} alt={imgAlt}/>
      </div>
    </Link>
  )
}

export default ButtonWithImg;