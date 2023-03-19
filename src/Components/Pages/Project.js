import { Button, Card, Container, Col, Row } from "react-bootstrap";

const Project = ({ work }) => {
  return (
    <Container>
      <Row>
        {work.map((item) => (
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.body}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Project;
