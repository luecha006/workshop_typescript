import React from "react";
import { Container, Card, Row, Col, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const profilepic =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
const js = "https://img.icons8.com/color/48/000000/javascript--v1.png";
const rjs = "https://img.icons8.com/color/48/000000/react-native.png";
const python = "https://img.icons8.com/color/48/000000/python--v1.png";
const nodejs = "https://img.icons8.com/color/48/000000/nodejs.png";
import "./index.css";

const index = () => {
  let navigate = useNavigate();

  const hendBack = () => {
    navigate(-1);
  };

  return (
    <div className="home-body mt-5 mb-3">
      <Row className="home-main-row">
        <Col>
          <Card className="p-5">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  sed, ducimus deserunt suscipit voluptatum quos recusandae
                  harum nesciunt obcaecati, vel facere laborum eius voluptate
                  asperiores beatae velit sit, praesentium nobis qui. Iste
                  deserunt in nemo, minus commodi distinctio, nihil inventore,
                  repellendus optio natus aperiam nisi at sint cum eius!
                  Corporis ratione obcaecati reiciendis recusandae dolore alias
                  blanditiis qui ipsa illo impedit ullam delectus cum fugit
                  magni, culpa ipsum aut veniam laboriosam necessitatibus?
                  Facilis corrupti magnam nam facere ducimus eligendi nulla
                  obcaecati ullam. Possimus error ullam omnis assumenda
                  exercitationem nemo facere voluptatem fugit, sit corporis
                  deserunt unde nihil eos inventore ab.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  dicta aliquam asperiores nostrum corrupti culpa! Omnis, quidem
                  dolores. Minus neque libero ea vitae omnis fugiat inventore
                  ullam delectus harum est, assumenda dolorem iste quibusdam
                  voluptatum deserunt. Assumenda, adipisci, labore minus quia
                  sequi facilis dicta hic tenetur quidem delectus, nobis
                  dolores.
                </p>
              </Card.Text>
              <h3>My Skills</h3>
              <ul className="myskills">
                <li>
                  <Image src={js}></Image>
                </li>
                <li>
                  <Image src={rjs}></Image>
                </li>
                <li>
                  <Image src={python}></Image>
                </li>
                <li>
                  <Image src={nodejs}></Image>
                </li>
              </ul>
              <div className="back-next-button">
                <Button onClick={hendBack} variant="dark">
                  Back
                </Button>
              </div>
              <Card.Link>
                {/* <Button variant='primary'>About</Button> */}
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default index;
