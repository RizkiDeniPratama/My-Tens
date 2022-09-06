import React from 'react'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardRepo({repo}) {
  console.log("ini props => ", repo);
  return (
      <Col>
      <Card>
      <Card.Header>
        <Card.Title>{repo.name}</Card.Title>
      </Card.Header>
      <Card.Body>
        {/* <Button variant="secondary">
        <a href={repo.svn_url} className={}>Go Github</a>
        </Button> */}
        <a href={repo.svn_url} class="btn btn-secondary btn-md " role="button" aria-disabled="true">Go Github</a>
      </Card.Body>
    </Card>
      </Col>
  )
}
