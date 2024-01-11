import styles from './AboutContent.module.css'

const AboutContent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Building things for the web, softwares and APIs.</h1>
      <p className={styles.description}>
        I'm Thomas, 23 years old. Since my young age around 8, I started learning about 3D so I could add my own models and monsters into my favorite childhood game Dragonica. Through that, I learned how to use
        3D software such as Blender, 3DS Max, Maya, and ZBrush. I also started learning how to code, first with LUA that allowed me to create my own scripts for the game and having a first approach to
        programming.
      </p>
      <p className={styles.description}>
        I had the chance to work on a few projects with my friends, such as a game called "Dragonica" where I was responsible for the 3D models and animations of the monsters and the assets (weapons,
        armors, etc...). It was a great experience to work with a team and to see the game being played by thousands of people, and it surely motivated me to keep learning and improving my skills.
      </p>
      <p className={styles.description}>
        I then started to look how I could improve the workflow of the team and I began to dig into existing tools and how they were made. I started to learn C++ and C# to be able to create my own
        tools and to automate repetitive tasks.
      </p>
      <p className={styles.description}>
        {' '}
        Finally, I'm now into Web Development, first it was to create custom panels for game servers and simplifying administrative tasks relative to the database. Then it was to create my own website
        to showcase my work and to have a place where I could share my projects and my knowledge.
      </p>
      <p className={styles.description}>
        Creating 3D websites and assets with Three.js bundled in React Three Fiber, using the Next.js framework, is something I really enjoy doing. I'm also interested in learning more about the
        backend and the DevOps side of things, this site was made with Next.js and deployed on Vercel. Specifically Next.js 13 with the new App folder structure and the new Image component.
      </p>
      <p className={styles.description}>To see more of my work, you can check out my projects up here, or my GitHub profile.</p>
    </div>
  )
}

export default AboutContent
