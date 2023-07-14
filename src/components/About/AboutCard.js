import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="orange">Zheng Hao </span>
            from <span className="orange"> Toronto.</span>
            <br/>
            <br/>
            I majored in <span className="orange">Software Engineering </span> 
            for my undergraduate degree at <span className="orange">Beihang University
            </span>, and pursued a graduate degree in <span className="orange">
            Network Computing</span> at <span className="orange">Monash University
            </span> in Australia.
            <br/>
            <br/>
            I'm passionate about programming and enjoy exploring all aspects of 
            <span className="orange"> web development</span> and <span className="orange">
            data analysis</span>. I stay up-to-date with the latest developments 
            in these fields through reading and learning.
            <br />
            <br />
            Here are some other activities that I enjoy doing apart from coding:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(248, 172, 72)" }}>
            "May the Force be with you."{" "}
          </p>
          <footer className="blockquote-footer">Star Wars</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
