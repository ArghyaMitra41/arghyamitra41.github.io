import React from "react";

import axios from "axios";
import { Jumbotron } from "./migration";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, summary, highlights, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));

  React.useEffect(() => {
    const handleRequest = async () => {
      const instaLink = "https://www.instagram.com/";
      const instaQuery = "/?__a=1";
      try {
        const response = await axios.get(instaLink + link + instaQuery);
        setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
      } catch (error) {
        setShowPic(false);
        console.error(error.message);
      }
    };

    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);

  return (
    <Jumbotron id="aboutme" className="section-shell">
      <div className="container">
        <div className="row align-items-center section-card about-card">
          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            {showPic && (
              <div className="about-photo-frame">
                <img
                  className="about-photo"
                  src={profilePicUrl}
                  alt="profilepicture"
                  width={imgSize}
                  height={imgSize}
                />
              </div>
            )}
          </div>
          <div className={`col-lg-${showPic ? "7" : "12"}`}>
            <p className="section-kicker">{heading}</p>
            <h2 className="display-4 mb-4 section-title">
              Building dependable digital experiences
            </h2>
            <p className="lead section-lead">{message}</p>
            {summary && <p className="section-copy">{summary}</p>}
            {highlights && (
              <div className="about-highlights">
                {highlights.map((highlight) => (
                  <div key={highlight} className="about-highlight">
                    {highlight}
                  </div>
                ))}
              </div>
            )}
            <div className="section-actions">
              {resume && (
                <a
                  className="btn btn-dark btn-lg"
                  href={resume}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Download Resume
                </a>
              )}
              <a
                className="btn btn-outline-dark btn-lg"
                href="#contact"
                role="button"
                aria-label="Contact me"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
