import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hima sai </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />I am a passionate student intrested in trending tech stuff like: 
            blockchain.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing cricket
            </li>
            <li className="about-activity">
              <ImPointRight />  Reading Tech News
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Success is the sum of small efforts, repeat it!"{" "}
          </p>
          <footer className="blockquote-footer">Hima sai</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
