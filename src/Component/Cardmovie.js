import React from "react";
import { Rate } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

// import { useNavigate, useParams } from "react-router-dom";

function Cardmovie(props) {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  return (
    <div
      style={{
        backgroundColor: "#ffe8a5",
      }}
    >
      <div className="cardmovie">
        <img
          src={location.state.image}
          alt="movieimg"
          style={{ width: "200px", margin: "100px 30px 0 70px" }}
        />
        <div>
          <h1 style={{ color: "#e71a45", margin: "150px 0 8px 0" }}>
            {location.state.name}
          </h1>
          <span>{location.state.type}</span>
          <Rate
            value={location.state.rating}
            style={{ margin: "10px 20px", color: "#e71a45", fontSize: "15px" }}
          ></Rate>
          <p style={{ width: "280px" }}>{location.state.description}</p>
        </div>
        <iframe
          style={{ margin: "100px 0px 0 150px" }}
          width="560"
          height="315"
          src={location.state.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Button
        variant="danger"
        style={{
          fontSize: "40px",
          borderStyle: " 6px ridge",
          margin: " 50px 550px",
        }}
        onClick={() => navigate(-1)}
      >
        Go Back
      </Button>
    </div>
  );
}

export default Cardmovie;
