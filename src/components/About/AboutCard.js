import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gonzalo Santizo </span>
            from <span className="purple"> Guatemala.</span>
            <br />I am a studen in UVG that loves programmings.
            <br />
            <br />
            Apart from coding, my hobbies include
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Know no fear"{" "}
          </p>
          <footer className="blockquote-footer">Roboute Guilliman</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
