import {
  Navbar,
  Button,
  Nav,
  Container,
  Form,
  FormControl,
} from "react-bootstrap";
import Ratee from "./Rate";

const Navvbar = (props) => {
  const handleInputChange = (e) => props.setFilterByName(e.target.value);

  return (
    <div>
      <Navbar style={{ fontSize: "12px"  }} className="navstyle" >
        <Container>
          <Navbar.Brand href="#" style={{ fontSize: "12px"  , color: "#351c32"  }}>
            popcorn
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Find Movies & TV"
                className="me-2"
                aria-label="Search"
                style={{ fontSize: "12px", padding: " 0 40px" }}
                onChange={handleInputChange}
                value={props.filterByName}
              />
              <Button
                variant="outline-warning"
                style={{
                  fontSize: "12px",
                  borderStyle: " 6px ridge",
                  margin: " 0 30px 0 0",
                }}
              >
                Search
              </Button>
            </Form>
            <Ratee value={props.value} setValue={props.setValue} />
            <Nav
              className="me-auto"
              navbarScroll
              style={{ margin: " 0 280px" , color: "#351c32"  }}
            >
              <Nav.Link href="#action1">FREE MOVIES & TV</Nav.Link>
              <Nav.Link href="#action2">FEATURES</Nav.Link>
              <Nav.Link href="#action1">DOWNLOAD</Nav.Link>
              <Nav.Link href="#action2">NEWS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navvbar;
