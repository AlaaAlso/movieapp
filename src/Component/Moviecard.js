import React from "react";
import { Card } from "react-bootstrap";
import { Rate } from "antd";
import { Link } from "react-router-dom";
function Moviecard(props) {
  return (
    <div>
      <Link to={`/movies/${props.movie.id}`} state={props.movie}>
        <Card style={{ width: "15rem", margin: "40px" }}>
          <Card.Img
            variant="top"
            src={props.movie.image}
            style={{ width: "200px", margin: "10px 40px 10px 20px" }}
          />
          <Card.Body>
            <Rate
              value={props.movie.rating}
              style={{ color: "#e71a45", margin: "20px 0" }}
            ></Rate>{" "}
            <Card.Title style={{ color: "#6F3F71" }}>
              {props.movie.name}
            </Card.Title>
            <span style={{ color: "#e71a45" }}>{props.movie.type}</span>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default Moviecard;
