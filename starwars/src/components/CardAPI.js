import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWars from "./StarWars";
import { Container, Row } from "reactstrap";

function CardAPI() {
  // Add your function name here
  const [person, setPerson] = useState([]);
  useEffect(() => {
    axios
      .get(" https://swapi.co/api/people ") // Your API goes here
      .then(res => {
        console.log("https://swapi.co/api/people ", res.data); // This will print out a message
        setPerson(res.data.results);
      })
      .catch(error => {
        console.log("Whoops go back, thats an error!", error);
      });
  }, []);
  console.log(person);

  return (
    <Container>
      <Row>
        {person.map(attr => {
          return <StarWars name={attr.name} key={attr.hair_color} />;
        })}
      </Row>
    </Container>
  ); //This is make sure to show something on the screen
}
export default CardAPI;
