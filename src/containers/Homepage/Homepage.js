import React from "react";
import { Link } from "react-router-dom";

import styles from "./Homepage.module.css";

// bootstrap
import { Container, Row, Col } from "react-bootstrap";

const Homepage = (props) => {
  return (
    <Container>
      <div className={styles.container}>
        <Row className={styles.row}>
          <Col>
            <h1>
              Face Analyzer <br></br> and <br></br> Generator
            </h1>
            <p>We use AI to generate faces you describe.</p>
          </Col>
          <Col>
            <Row className={styles.row}>
              <Col className={styles.col}>
                <Link
                  className={styles.link}
                  to="/generate-faces-using-facial-features"
                >
                  <div className={styles.box1}>
                    Generate <br /> Faces
                  </div>
                </Link>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col className={styles.col}>
                <Link to="/compare-faces">
                  <div className={styles.box3}>
                    Compare
                    <br /> Faces
                  </div>
                </Link>
              </Col>
              <Col className={styles.col}>
                <Link to="/extract-facial-features">
                  <div className={styles.box4}>
                    Extract <br /> Features
                  </div>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Homepage;
