import React, { useState } from 'react';
import { Container, Row, Col, Form, Table } from 'react-bootstrap';

const cars = [
  { id: 1, brand: 'Toyota', model: 'Corolla' },
  { id: 2, brand: 'Honda', model: 'Civic' },
  { id: 3, brand: 'Ford', model: 'Focus' },
  { id: 4, brand: 'Chevrolet', model: 'Cruze' },
  { id: 5, brand: 'Nissan', model: 'Sentra' },
];

const brands = [...new Set(cars.map(car => car.brand))];

const CarList = () => {
  const [selectedBrand, setSelectedBrand] = useState('');

  const filteredCars = selectedBrand
    ? cars.filter(car => car.brand === selectedBrand)
    : cars;

  return (
    <Container>
      <Row>
        <Col>
          <h1>Lista de Carros</h1>
          <Form>
            <Form.Group>
              <Form.Label>Selecione a Marca</Form.Label>
              <Form.Control
                as="select"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                <option value="">Todas as Marcas</option>
                {brands.map((brand, index) => (
                  <option key={index} value={brand}>
                    {brand}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Marca</th>
                <th>Modelo</th>
              </tr>
            </thead>
            <tbody>
              {filteredCars.map(car => (
                <tr key={car.id}>
                  <td>{car.brand}</td>
                  <td>{car.model}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default CarList;
