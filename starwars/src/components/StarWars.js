import React from "react";
import styled from 'styled-components'

import {
  Card,
  CardText,
  CardBody,
  CardHeader,
  CardSubtitle,
  Col
} from "reactstrap";


function StarWars(jedi) {

    const Style = styled.div`
      color: purple;
      border: 4px double yellow;
      border-radius: 3%;
      background: #23e8ce;
      
    `;
  return (
    <Col sm="6" md="4" lg="3">
      <Card>
        <Style>
          <CardHeader>
            Jedi Name: {jedi.name}
            <CardBody>
              <CardText>Height: {jedi.height}</CardText>
              <CardSubtitle>Hair: {jedi.hair_color}</CardSubtitle>
              <CardText> Birthday: {jedi.birth_year}</CardText>
          </CardBody>
        </CardHeader>
        </Style>
      </Card>
    </Col>
  );
}

export default StarWars;
