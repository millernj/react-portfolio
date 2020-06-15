import React from 'react';
import Container from '../Container';
import Col from '../Col';
import Row from '../Row';
import './style.css';

function Footer() {
  return (
    <footer className="footer">
      <Container center>
        <Row>
          <Col size="sm xs-12">
            <a href="mailto:noahjmiller17@gmail.com">
              noahjmiller17@gmail.com
            </a>
          </Col>
          <Col size="sm xs-12">
            <div className="text-nowrap">© 2019 Noah Miller</div>
          </Col>
          <Col size="sm xs-12">
            <a href="tel:+1-818-689-6680">
              (818) 689-6680
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
