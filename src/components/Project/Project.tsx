import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
               <div className="project-links">
                <a href="https://github.com/Shiva-Ch0wdary/Dr-Helpy" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
              </div>
              <div className="project-links">
                <a href="https://dr-helpy.vercel.app" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> 
                </div>
            </header>
            <div className="body">
              <h3>Dr-Helpy</h3>
              <p> Designed multi-page e-commerce web applications. </p>
              <p>The web application incorporates features for online medicine ordering and virtual doctor consultations, alongside creating a concise disease information hub to educate users.</p>
              <p> Along with highly customizable attributes for products via secure admin portal.</p>
            </div>
            <footer> <ul className="tech-list"> <li>React</li> <li>APIs</li> <li>MongoDb</li> <li>NodeJs</li> <li>Java Script</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <a href="https://github.com/Shiva-Ch0wdary" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
              </div >
              <div className="project-links">   
                <a href="https://github.com/Shiva-Ch0wdary" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>IMMERSIVE LEARNING: EXPLORING PROJECTILE MOTION AND GRAVITY IN VIRTUAL REALITY</h3>
               <p>Designed progressive VR scenarios to explore physics principles interactively, using tactile VR devices and Socratic questioning to boost engagement and critical thinking. </p>
              <p> Conducted a study with 20 students, showing improved comprehension and positive feedback on the transformative VR learning experience.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Unity</li>
                <li>blender</li>
                <li>Oculus SDK</li>
                <li>C#</li> 
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="project-links">
                <a href="https://github.com/Shiva-Ch0wdary/Health_Care_Robot" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                </div>
                <div className="project-links">
                <a href="https://drive.google.com/file/d/1_AbXD2thGruHekPBAd-zeIEykU9vg8lO/view?usp=sharing" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Health Care Robot</h3>
              <p>Successfully developed a healthcare robotics system utilizing a Convolutional Neural Network (CNN) model. </p>
              <p>Integrated a temperature sensor to monitor body temperature and detects the presence of a face mask. </p>
              <p>This project showcased advanced applications of robotics and AI in healthcare for enhanced safety and efficiency. </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Arduino</li>
                <li>Neural Network</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
               <div className="project-links">
                <a href="https://github.com/Shiva-Ch0wdary/Restaurant_ChatBot" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                </div>
                <div className="project-links">
                <a href="https://github.com/Shiva-Ch0wdary/Restaurant_ChatBot" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Menu Based Restaurant ChatBot</h3>
              <p>Chatbot is able to solve various queries related to restaurant including booking, cuisine, type of booking required etc.</p>
<p> Worked on multi-label classification and Recurrent Neural Networks. </p>
<p>Achieved an accuracy of 95.3%. </p>
              
            </div>
            <footer>
              <ul className="tech-list">
                <li>Tensorflow</li>
                <li>Numpy</li>
                <li>Matploitlib</li>
                <li>Python</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
             <div className="project-links">
                <a href="https://github.com/Shiva-Ch0wdary/Sentiment_Analysis" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
              <div className="project-links">
                <a href="https://github.com/Shiva-Ch0wdary/Sentiment_Analysis" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Sentiment Analysis on a Twitter data</h3>
              <p>A sentiment analysis model is constructed using convolutional neural networks (CNNs).</p>
              <p>Natural language processing techniques are employed for data preprocessing, including text cleaning and tokenization.</p>
              <p>The code showcases skills in data manipulation, natural language processing, and machine learning, particularly in sentiment analysis.</p>

              </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li> 
                <li>nltk</li>
                <li>pandas</li>
                <li>TensorFlow</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <div className="project-links">
                <a href="https://github.com/Shiva-Ch0wdary/Medical-Database-Management-System" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
               <div className="project-links">
                <a href="https://github.com/Shiva-Ch0wdary/Medical-Database-Management-System" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Medical Database Management System</h3>
              <p>This project is about Medical Store Database Management System using Command Line Interface.</p>
              <p>User have the capability to store and retrieve comprehensive records that include inventory data, sales reports, information about sellers, and details about buyers. </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>MySQL</li>
                <li>Java</li>
                <li>OOPS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}