import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';

function Cards() {
  const [users, setUsers] = useState();
  useEffect(() => {
    if (!users) {
      axios.get('https://randomuser.me/api/?results=50').then((response) => setUsers(response.data.results));
    }
  }, [users]);

  return (
    <Row xs={1} sm={3} md={5} lg={6} className="g-4 w-100">
      {users
        ? users.map((user) => (
          <Col key={Math.random()}>
            <Card>
              <Card.Img variant="top" src={user.picture.large} />
              <Card.Body>
                <Card.Title>{`${user.name.first} ${user.name.last}`}</Card.Title>
                <Card.Text>
                  Vive en
                  {' '}
                  {user.location.state}
                  ,
                  {' '}
                  {user.location.city}
                  {' '}
                  en el pais de
                  {' '}
                  {user.location.country}
                  {' '}
                  y tiene
                  {' '}
                  {user.registered.age}
                  {' '}
                  años. Su teléfono es
                  {' '}
                  {user.cell}
                  {' '}
                  y su correo es
                  {' '}
                  {user.email}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )) : <h1>Loading...</h1>}
    </Row>
  );
}

export default Cards;
