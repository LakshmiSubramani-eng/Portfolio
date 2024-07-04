import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">LAKSHMI SUBRAMANI </span>
            from <span className="purple"> Coimbatore.Tamilnadu</span>
            <br />
            I am currently Working as a software developer at Nxtlogic Software Solutions.
            <br />
            I have completed Integrated BSC in Computer Science and Computing at Rathinam College Of Arts&Science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Engaging in online learning
            </li>
            <li className="about-activity">
              <ImPointRight /> Household chores
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Lakshmi Subramani</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
