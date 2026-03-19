import React from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";

const MainBody = React.forwardRef(
  ({ title, message, description, tags, icons }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        className="title hero-section text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <Container className="hero-content text-center">
          <div className="hero-panel mx-auto">
            <p className="hero-eyebrow">Salesforce Engineer • Consultant • Builder</p>
            <h1 ref={ref} className="display-1 hero-title">
              {title}
            </h1>
            <Typist>
              <div className="lead typist hero-subtitle">
                {message}
              </div>
            </Typist>
            <p className="hero-description mx-auto">{description}</p>
            {tags && (
              <div className="hero-tags">
                {tags.map((tag) => (
                  <span key={tag} className="hero-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="hero-actions">
              <a
                className="btn btn-light btn-lg hero-primary-btn"
                href="#aboutme"
                role="button"
                aria-label="Learn more about me"
              >
                Explore my work
              </a>
              <a
                className="btn btn-outline-light btn-lg hero-secondary-btn"
                href="#contact"
                role="button"
                aria-label="Jump to contact section"
              >
                Let&apos;s connect
              </a>
            </div>
            <div className="hero-socials">
              {icons.map((icon, index) => (
                <a
                  key={`social-icon-${index}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={icon.url}
                  className="socialicons"
                  aria-label={`My ${icon.image.split("-")[1]}`}
                >
                  <i className={`fab ${icon.image} fa-lg`} />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
