import styles from "./page.module.css";
import HeroProjects from "../../components/ui/HeroProjects";
import Project from "../../components/ui/Project";

const Projects = () => {
  return (
    <div className={styles.container}>
      <HeroProjects/>
      <div className={styles.projects}>
        <Project
          title="3D Interactive Portfolio"
          description="A 3D interactive portfolio built with React Three Fiber and Three.js."
          details="Made for fun, experimentation, and to learn more about 3D rendering in a web context. This website has been built with React Three Fiber, Three.js and @react-three/cannon. It is a 3D game-alike interactive portfolio that allows you to navigate through the projects and see the details of each project using a controllable tricycle. It also has a dark mode and a light mode, and many other fun features that you can discover by yourself."
          image="/assets/TricyclePortfolio.png"
          link="https://3d.tcaron.fr/"
          github="https://github.com/thomas-rooty/tricycle-portfolio"
          tools={["Next.js", "R3/Fiber", "R3/Cannon", "Zustand"]}
        />
        <Project
          title="LACXFILMS"
          description="A website for an independent filmmaker, pilot drone, and photographer."
          details="This website was built for a friend of mine who is a filmmaker, pilot drone, and photographer. The videos showcased on the website are grabbed on a private playlist of his YouTube channel when the website is loading, which allows Kevin to be independant when he wants to showcase new work. It is a simple website that allows him to showcase his work and contact him."
          image="/assets/LacxFilms.png"
          link="https://lacxfilms.com/"
          github="https://github.com/thomas-rooty/klacroix"
          tools={["Next.js", "Formspree", "React Parallax", "Parcel"]}
        />
        <Project
          title="Quentin HEBERT's Website"
          description="A portfolio website for a photographer."
          details="Same as the previous project, this website was built for a friend of mine who is a photographer. The design was made by him, and I coded it, you can even see some street trial pictures! Make sure to contact him if you need a photographer for your next project."
          image="/assets/QuentinHebert.png"
          link="https://quentinmaker.fr/"
          github="https://github.com/thomas-rooty/qhebert-portfolio/"
          tools={["Next.js", "Formspree", "React Parallax", "Parcel"]}
        />
        <Project
          title="NextJS Third Person View World"
          description="A 3D world built with NextJS, R3F, Three.JS and React Three Cannon."
          details="This boilerplate was made to start off a new project with a controllable character, 3rd person camera and collision. It is a simple world with a few objects and a controllable sphere that can move around kinematically. It is a good starting point for a game-like project with a flying or walking base character."
          image="/assets/NextJSWorld.png"
          link="https://nxtjs-3d-third-person-world.vercel.app/"
          github="https://github.com/thomas-rooty/nxtjs-3d-third-person-world"
          tools={["Next.js", "R3/Fiber", "R3/Cannon", "Zustand"]}
        />
        <Project
          title="Space Immersion"
          description="A 3D representation of the solar system built with Three.js."
          details="A portfolio website, with an interactive 3D view of the solar system, with textures directly coming from NASA's database (the public one, of course). You can choose a planet and see its details by zooming in and out of it. I made this accross 2 weeks to learn more about 3D rendering in a web context, that was my first time using React Three Fiber and Three.js."
          image="/assets/SpaceImmersion.png"
          link="https://3dxp.tcaron.fr"
          github="https://github.com/thomas-rooty/immersiveXP"
          tools={["React", "R3/Fiber", "Three.js"]}
        />
      </div>
    </div>
  )
}

export default Projects;