import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Contact Card Using React Js"
              description="A contact card component is a reusable UI element that displays contact information such as a name, phone number, email address, and profile picture. This component can be used in various parts of a web application to provide a consistent and visually appealing way to present contact details.."
              ghLink="https://github.com/LakshmiSubramani-eng/Contact-Card-Using-React"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Youtube Clone"
              description="This project aims to develop a YouTube clone application utilizing the React.js framework to provide a modern, responsive, and efficient video sharing platform. The application will emulate core functionalities of YouTube, including user authentication, video uploading, video playback, comments, likes, subscriptions, and personalized recommendations.."
              ghLink="https://github.com/LakshmiSubramani-eng/Clone-Project"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Drinker Using HTML5,CSS3,Bootstarp"
              description="This project aims to develop a simple and elegant Mini Drinker application using HTML, CSS, and Bootstrap. The application will provide a user-friendly interface for selecting and displaying information about various beverages. This project focuses on showcasing the effective use of Bootstrap for responsive design and CSS for styling enhancements."
              ghLink="https://github.com/LakshmiSubramani-eng/Drinker-project-Using-HTML-CSS-JS"
              // demoLink="https://edito r.soumya-jit.tech/"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Diabetes Prediction Using Machine Learning Techniques"
              description="The healthcare industry is inundated with a growing amount of patient data, which is crucial for researchers working to improve the management of major diseases. One area of focus is diabetes, a disease that is escalating at an alarming rate and can lead to severe complications such as blurred vision, myopia, burning extremities, kidney failure, and heart failure. Diabetes occurs when blood sugar levels exceed a certain threshold or when the body cannot produce enough insulin to regulate these levels.."
              ghLink="https://github.com/LakshmiSubramani-eng/Diabetic-Prediction-Using-Machine-Learning.git"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Diagnosis Of Liver Diseases Using Machine Learning"
              description="Liver Diseases account for over 2.4% of Indian deaths per annum. Liver disease is also difficult to diagnose in the early stages owing to subtle symptoms. Often the symptoms become apparent when it is too late. This paper aims to improve diagnosis of liver diseases by exploring 2 methods of identification patient parameters and genome expression. The paper also discusses the computational algorithms that can be used in the aforementioned methodology and lists demerits. It proposes methods to improve the efficiency of these algorithms."
              ghLink="https://github.com/LakshmiSubramani-eng/Liver-Disease-Prediction-Using-Machine-Learning"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Netflix Clone Using Django"
              description="This project aims to develop a Netflix clone application using the Django web framework. The application will replicate core functionalities of Netflix, including user authentication, content streaming, recommendations, and a responsive user interface. The focus will be on creating a scalable and efficient platform that delivers high-quality video streaming and a personalized user experience."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
