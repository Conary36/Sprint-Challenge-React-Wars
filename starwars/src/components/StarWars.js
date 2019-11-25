import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardHeader,
  CardSubtitle,
  Col
} from "reactstrap";

function StarWars(jedi) {
  return (
    <Col sm="6" md="4" lg="3">
      <Card>
        <CardHeader>
          Card title: {jedi.title}
          <CardBody>
            <CardText>{jedi.description}</CardText>
            <CardSubtitle>Director: {jedi.director}</CardSubtitle>
            <CardText> Date: {jedi.release_date}</CardText>
          </CardBody>
        </CardHeader>
      </Card>
    </Col>
  );
}

export default StarWars;
