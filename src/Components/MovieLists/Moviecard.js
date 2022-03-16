import React from "react";
import { Button, Card } from "react-bootstrap";
import RatingSIze from "../rating";

const Moviecard = ({ movie }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Button variant="primary">Details</Button>
        <RatingSIze rating={movie.rating} />
      </Card.Body>
    </Card>
  );
};

export default Moviecard;
