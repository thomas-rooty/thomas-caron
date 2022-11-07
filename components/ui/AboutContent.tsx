import styles from './AboutContent.module.css';

const AboutContent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>From 3D Programming to Fullstack Web Development</h1>
      <p className={styles.description}>
        Coucou moi c'est Toto
      </p>
    </div>
  );
}

export default AboutContent;