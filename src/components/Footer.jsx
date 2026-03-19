import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "transparent" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center site-footer">
      <Container>
        {props.children}
        <p className="footer-note mb-0">
          Crafted to showcase thoughtful engineering, delivery ownership, and modern Salesforce expertise.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
