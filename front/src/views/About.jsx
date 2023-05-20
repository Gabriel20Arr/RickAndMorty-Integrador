// MI NOMBRE Y PORQUE CREE ESTE PROYECTO
import AboutText from "../components/AboutText";
import style from "../views/about.module.css";

const About = () => {
  return (
    <div className={style.About}>
      <h1 className={style.h1}>Rick y Morty</h1>
      <AboutText />
    </div>
  );
};

export default About;
