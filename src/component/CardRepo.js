import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardRepo() {
  return (
    <div className='p-3'>
    <Card>
      <Card.Header>
        <Card.Title>Defa Store</Card.Title>
      </Card.Header>
      <Card.Body>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
