import React from "react";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <div id="contact" className="contact-card mx-auto">
      <p className="section-kicker text-center">{heading}</p>
      <h2 className="display-4 pb-3 text-center section-title">Let&apos;s build something meaningful</h2>
      <p className="lead text-center pb-3 contact-copy">
        {message} <a className="contact-link text-decoration-none" href={`mailto:${email}`}>{email}</a>.
      </p>
      <a className="btn btn-dark btn-lg" href={`mailto:${email}`}>
        Start a conversation
      </a>
    </div>
  );
};

export default GetInTouch;
