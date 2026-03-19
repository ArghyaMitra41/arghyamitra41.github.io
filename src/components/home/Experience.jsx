import React from 'react';
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Experience = ({ experiences }) => {
  return (
    <section className="section-shell">
      <Container>
        <Jumbotron className="section-card experience-section">
          <p className="section-kicker text-center">{experiences.heading}</p>
          <h2 className="display-4 mb-5 text-center section-title">
            Experience that ships with confidence
          </h2>
          <Row>
            {
              experiences.data.map((data, index) => {
                return <ExperienceCard key={index} data={data} />
              })
            }
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Experience;
