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
          details="Made for fun, experimentation, and to learn more about 3D rendering in a web context. This website has been built with React Three Fiber, Three.js and @react-three/cannon. It is a 3d dimensional game-alike interactive portfolio that allows you to navigate through the projects and see the details of each project using a controllable tricycle. It also has a dark mode and a light mode, and many other fun features that you can discover by yourself."
          image="/assets/TricyclePortfolio.png"
          link="https://3d.tcaron.fr/"
          github="https://github.com/thomas-rooty/tricycle-portfolio"
          tools={["Next.js", "R3/Fiber", "Three.js", "Zustand", "R3/Cannon", "Vercel"]}
        />
        <Project
          title="LACXFILMS"
          description="A website for an independent filmmaker, pilot drone, and photographer."
          details="This website was built for a friend of mine who is a filmmaker, pilot drone, and photographer. It is a simple website that allows him to showcase his work and contact him."
          image="/assets/LacxFilms.png"
          link="https://lacxfilms.com/"
          github="https://github.com/thomas-rooty/klacroix"
          tools={["Next.js", "Formspree", "React Parallax", "Parcel", "Netlify"]}
        />
      </div>
    </div>
  )
}

export default Projects;