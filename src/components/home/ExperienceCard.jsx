import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  const companyInitials = (data.company || data.role)
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <Col lg="6" className="mb-4">
      <div className="experience-card h-100">
        <div className="experience-logo-wrap">
          {data.companylogo ? (
            <img className="experience-logo" src={data.companylogo} alt={data.company || data.role} />
          ) : (
            <div className="experience-logo-fallback" aria-hidden="true">
              {companyInitials}
            </div>
          )}
        </div>
        <p className="experience-role">{data.role}</p>
        {data.company && <p className="experience-company">{data.company}</p>}
        <p className="experience-date">{data.date}</p>
        {data.summary && (
          <p className="experience-summary">{data.summary}</p>
        )}
      </div>
    </Col>
  );
}

export default ExperienceCard;
