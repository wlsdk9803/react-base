//import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ExampleMain = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [items, setItems] = useState([
    { id: 1, name: "임세현" },
    { id: 2, name: "최경서" },
    { id: 3, name: "박진아" },
  ]);
  const handleShow = (id, name) => {
    setTitle(id);
    setBody(name);
    setShow(true);
  };
  const handleClose = () => setShow(false);
  return (
    <div>
      <Container fluid>
        <Row>
          <Col sm={6} xs={12}>
            <h1>Users</h1>
            <ListGroup defaultActiveKey="link1">
              {items.map((item) => {
                return (
                  <ListGroup.Item
                    action
                    key={item.id}
                    onClick={() => handleShow(item.id, item.name)}
                  >
                    {item.name}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
          <Col sm={6} xs={12}>
            <h2>Stocks</h2>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ExampleMain;
