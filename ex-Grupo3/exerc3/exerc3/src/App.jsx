import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarList from './components/CarList';

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <CarList />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
