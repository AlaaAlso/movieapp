import React from "react";
import { Card } from "react-bootstrap";
import { Rate } from "antd";

function Moviecard(props) {
  return (
    <div>
      <Card style={{ width: "15rem", margin:"40px" }}>
        <Card.Img variant="top" src={props.movie.image} />
        <Card.Body>
          <Rate value={props.movie.rating} style={{color: "#e71a45"}}></Rate>{" "}
          <Card.Title style={{color: "#6F3F71"}}>{props.movie.name}</Card.Title>
          <span style={{color: "#e71a45"}}>{props.movie.type}</span>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Moviecard;
