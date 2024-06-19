import { Container } from "./styles";
import srk from "../../assets/srk.jpg";
import mongodb from "../../assets/mongodb.png";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import unity from "../../assets/unity.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          Hello! My name is M. Shiva Rama Krishna. I recently completed my Bachelor's degree at IIIT Sri City and am a passionate full stack developer. My journey into technology began with a deep interest in problem-solving and building dynamic web applications.
         </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          During my time at Indian Institute of Information Technology Sri City, I gained valuable experience and honed my skills in HTML, CSS, JavaScript, React, Nodejs, and MongoDB. I had the opportunity to work on diverse and exciting projects, which allowed me to apply my knowledge practically and collaborate effectively with my peers.  
          </p>
          </ScrollAnimation>
          
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          As I continue my career, I am eager to dive into new and challenging projects, particularly in web development and cross-platform mobile development. My goal is to create seamless and impactful online experiences, driving innovation and success for my clients.  
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={unity} alt="Unity" />
            </ScrollAnimation>
            </div>
            <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={mongodb} alt="MongoDB" />
            </ScrollAnimation>
            </div>
        </div>
          {/* <div className="hability2">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={swagger} alt="Swagger" />
            </ScrollAnimation>
            </div>
        <div className="hability2">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={blender} alt="Blender" />
            </ScrollAnimation>
        </div>  */}
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={srk} alt="Shiva Rama Krishna" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
  