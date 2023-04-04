import styles from './page.module.css'
import HeroProjects from '../../components/ui/HeroProjects'
import Project from '../../components/ui/Project'

const Projects = () => {
  return (
    <div className={styles.container}>
      <HeroProjects />
      <div className={styles.projects}>
        <Project
          title="TrackWatch"
          description="A website that allows you to track your favorite TV shows and never miss an episode again."
          details="TrackWatch is an app that helps you monitor your favorite shows, movies, and anime. With TrackWatch, you'll never forget where you left off, how many episodes you have left, or when the next episode is. Plus, with our progress tracker, you'll always know how close you are to completing your favorite series."
          image="/assets/TrackWatch.png"
          link="https://trackwatch.live/"
          github="https://github.com/thomas-rooty/trackwatch"
          tools={['Next.js', 'Zustand', 'Supabase']}
        />
        <Project
          title="3D Interactive Portfolio"
          description="A 3D interactive portfolio built with React Three Fiber and Three.js."
          details="Made for fun, experimentation, and to learn more about 3D rendering in a web context. This website has been built with React Three Fiber, Three.js and @react-three/cannon. It is a 3D game-alike interactive portfolio that allows you to navigate through the projects and see the details of each project using a controllable tricycle. It also has a dark mode and a light mode, and many other fun features that you can discover by yourself."
          image="/assets/TricyclePortfolio.png"
          link="https://3d.tcaron.fr/"
          github="https://github.com/thomas-rooty/tricycle-portfolio"
          tools={['Next.js', 'R3/Fiber', 'R3/Cannon', 'Zustand']}
        />
        <Project
          title="LACXFILMS"
          description="A website for an independent filmmaker, pilot drone, and photographer."
          details="This website was built for a friend of mine who is a filmmaker, pilot drone, and photographer. The videos showcased on the website are grabbed on a private playlist of his YouTube channel when the website is loading, which allows Kevin to be independant when he wants to showcase new work. It is a simple website that allows him to showcase his work and contact him."
          image="/assets/LacxFilms.png"
          link="https://lacxfilms.com/"
          github="https://github.com/thomas-rooty/klacroix"
          tools={['Next.js', 'Formspree', 'React Parallax', 'Parcel']}
        />
        <Project
          title="Spacescape"
          description="A survival game set in the year 2300 where the Earth has become uninhabitable and the remaining survivors have fled to space in search of a new habitable planet"
          details="As you begin your new journey on this planet, you embark on a mission to collect soil, air, and water samples to analyze and determine if the planet is viable for humanity. The tutorial phase of the game will teach you how to analyze the soil. The soil appears poor and dangerous, Jacob will have to fight to get the ship back in working order until he can take off from this planet and find another habitable planet. Jacob's survival depends on your ability to use limited resources efficiently and your determination to find a solution to leave this planet. Get ready for an epic adventure as you fight for survival in the vast reaches of space."
          image="/assets/SpaceScape.png"
          link="https://spacescape.vercel.app/"
          github="https://github.com/thomas-rooty/spacescape"
          tools={['Next.js', 'R3/Fiber', 'Zustand', 'Blender']}
        />
        <Project
          title="NEOIM Sentry"
          description="A dashboard that displays NEO (Near Earth Object) data, powered by NASA's Sentry System."
          details="This dashboard was built purely for experimentation and learning purposes. It is a dashboard that displays NEO (Near Earth Object) data and that can predict the star types following its values using a trained model made on Tensorflow (DeepLearning), powered by NASA's Sentry System. It is a simple dashboard that allows you to see the NEOs that are currently in the sky, above our heads. It also allows you to see the NEOs that are going to pass by Earth in the next years."
          image="/assets/NeoimSentry.png"
          link="https://neoim-sentry.vercel.app/"
          github="https://github.com/thomas-rooty/neoim-sentry"
          tools={['Next.js', 'NASA Sentry API', 'Tensorflow']}
        />
        <Project
          title="Quentin HEBERT's Website"
          description="A portfolio website for a photographer."
          details="Same as the previous project, this website was built for a friend of mine who is a photographer. The design was made by him, and I coded it, you can even see some street trial pictures! Make sure to contact him if you need a photographer for your next project."
          image="/assets/QuentinHebert.png"
          link="https://quentinmaker.fr/"
          github="https://github.com/thomas-rooty/qhebert-portfolio/"
          tools={['Next.js', 'Formspree', 'React Parallax', 'Parcel']}
        />
        <Project
          title="NextJS Third Person View World"
          description="A 3D world built with NextJS, R3F, Three.JS and React Three Cannon."
          details="This boilerplate was made to start off a new project with a controllable character, 3rd person camera and collision. It is a simple world with a few objects and a controllable sphere that can move around kinematically. It is a good starting point for a game-like project with a flying or walking base character."
          image="/assets/NextJSWorld.png"
          link="https://nxtjs-3d-third-person-world.vercel.app/"
          github="https://github.com/thomas-rooty/nxtjs-3d-third-person-world"
          tools={['Next.js', 'R3/Fiber', 'R3/Cannon', 'Zustand']}
        />
        <Project
          title="Penguin Icefield"
          description="A 3D icefield that you can discover while being a cute penguin."
          details="This website has been made by me and my girlfriend, so we can learn together about the 3D animation process and the web integration that follows. It has been built with React Three Fiber, Three.js and @react-three/cannon. It is a 3D game-alike interactive website that allows you to navigate through an icefield and discover a cute penguin fully modelized, rigged and animated by my beloved half!"
          image="/assets/PenguinIcefield.png"
          link="https://penguin.tcaron.fr/"
          github="https://github.com/thomas-rooty/penguin-icefield"
          tools={['Next.js', 'R3/Fiber', 'R3/Cannon', 'Zustand']}
        />
        <Project
          title="Space Immersion"
          description="A 3D representation of the solar system built with Three.js."
          details="A portfolio website, with an interactive 3D view of the solar system, with textures directly coming from NASA's database (the public one, of course). You can choose a planet and see its details by zooming in and out of it. I made this accross 2 weeks to learn more about 3D rendering in a web context, that was my first time using React Three Fiber and Three.js."
          image="/assets/SpaceImmersion.png"
          link="https://3dxp.tcaron.fr"
          github="https://github.com/thomas-rooty/immersiveXP"
          tools={['React', 'R3/Fiber', 'Three.js']}
        />
      </div>
    </div>
  )
}

export default Projects
