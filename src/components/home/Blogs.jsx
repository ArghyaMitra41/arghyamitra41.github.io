import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Jumbotron } from "./migration";

const Blogs = ({ blogs }) => {
  return (
    <section className="section-shell" id="blogs">
      <Container>
        <Jumbotron className="section-card blogs-section">
          <p className="section-kicker text-center">{blogs.heading}</p>
          <h2 className="display-4 mb-3 text-center section-title">
            Writing and features from my journey
          </h2>
          {blogs.message && (
            <p className="section-copy text-center blogs-intro mx-auto">
              {blogs.message}
            </p>
          )}
          <Row>
            {blogs.data.map((blog, index) => (
              <Col lg="6" className="mb-4" key={index}>
                <article className="blog-card h-100">
                  <p className="blog-source">{blog.source}</p>
                  <h3 className="blog-title">{blog.title}</h3>
                  {blog.summary && <p className="blog-summary">{blog.summary}</p>}
                  <a
                    className="blog-link"
                    href={blog.url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Read article
                  </a>
                </article>
              </Col>
            ))}
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
};

export default Blogs;
