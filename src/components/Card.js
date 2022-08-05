import React from 'react';
import '../stylesheets/Card.css';
import Card from 'react-bootstrap/Card';

function Cardbody(props) {
  return (
    <Card className='cardStyle text-center'>
      <Card.Img variant="top" src={props.imagen} />
      <Card.Body>
        <Card.Title className='cardTitle'>{props.nombre}</Card.Title>
        <Card.Text>{props.descripcion}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cardbody;