import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Addmovie(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [image, setimage] = useState("");
  const [rating, setrating] = useState("");
  const [name, setiname] = useState("");

  const addmovieurl = (image, rating, name) => {
    props.setMovies([
      ...props.movies,
      { id: Math.random(), image, rating, name },
    ]);
  };
  return (
    <div
      style={{
        backgroundColor: "#ffe8a5",
        textAlign: "center",
        fontSize: "100px",
      }}
    >
      <Button
        variant="danger"
        onClick={handleShow}
        style={{
          fontSize: "50px",
          padding: " 10px 40px",
          margin: "60px",
        }}
      >
        Add Movie
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        style={{
          backgroundColor: "transparent",
        }}
      >
        <Modal.Header
          closeButton
          style={{
            backgroundColor: "#ffe8a5",
          }}
        >
          <Modal.Title
            style={{
              textAlign: "center",
              fontSize: "30px",
              margin: " 0 140px",
            }}
          >
            Add Movie
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "#ffe8a5",
            textAlign: "center",
          }}
        >
          <span>img URL</span>
          <input
            onChange={(e) => setimage(e.target.value)}
            placeholder="URL"
            style={{
              color: "#e71a45",
              margin: "10px",
            }}
          ></input>
          <span>name</span>
          <input
            style={{
              color: "#e71a45",
              margin: "10px",
            }}
            onChange={(e) => setiname(e.target.value)}
            placeholder="name"
          ></input>
          <br></br>
          <span>rating</span>
          <input
            style={{
              color: "#e71a45",
              margin: "20px",
            }}
            onChange={(e) => setrating(e.target.value)}
            placeholder="rating"
          ></input>
        </Modal.Body>
        <Modal.Footer
          style={{
            backgroundColor: "#ffe8a5",
          }}
        >
          <Button
            variant="danger"
            onClick={handleClose}
            style={{
              margin: "0 60px",
            }}
          >
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => addmovieurl(image, rating, name)}
            style={{
              margin: "0 60px",
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Addmovie;
