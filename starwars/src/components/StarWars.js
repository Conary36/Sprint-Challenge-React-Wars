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
          Jedi Name: {jedi.name}
          <CardBody>
            <CardText>Height: {jedi.height} Mass: {jedi.mass}</CardText>
            <CardSubtitle>Hair: {jedi.hair_color}</CardSubtitle>
            <CardText> Birthday: {jedi.birth_year}</CardText>
          </CardBody>
        </CardHeader>
      </Card>
    </Col>
  );
}

export default StarWars;
