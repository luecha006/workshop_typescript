import React from "react";
import { Container, Card, Row, Col, Image, Button } from "react-bootstrap";

const profilepic =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";

const index = () => {
  return (
    <div className="home-body mt-5 mb-3">
      <Row className="home-main-row">
        <Col>
          <Card className="p-5 mt-3">
            <Card.Body>
              <Image src={profilepic} height={300}></Image>
              <Card.Title>
                <h1>My lady</h1>
              </Card.Title>
              <Card.Subtitle>
                <h2>Full-Stack Developer</h2>
              </Card.Subtitle>
              <Card.Text>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid cupiditate voluptas est sequi! Eaque voluptatibus
                  perspiciatis nobis! Iusto rerum distinctio ad dolore minus
                  excepturi quia vel laudantium recusandae nemo accusantium,
                  sapiente aut sint architecto tempora similique deleniti
                  eligendi explicabo eius impedit optio velit consequuntur
                  consequatur! Aspernatur quia cum velit. Esse!
                </p>
              </Card.Text>
              <Card.Link>
                <Button variant="primary">About</Button>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default index;
