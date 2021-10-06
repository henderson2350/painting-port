import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Photocard from "../Photocard";
import lava from "../../photos/lava.JPG";
import thermal from "../../photos/thermal.jpg";
import glitterGrain from "../../photos/glitterGrain.jpg";
import cartoon from "../../photos/cartoon.jpg";

const data1 = [

  {
    title: "Thermal",
    price: "$1500",
    photo: thermal,
    description: "Acrylic and resin on panel, 36x36",
  },
  {
    title: "Glitter grain",
    price: "$1000",
    photo: glitterGrain,
    description: "Gouache, acrylic, and glitter on panel, 20x20",
  },
];

const data2 = [
    {
        title: "Cartoon",
        price: "$900",
        photo: cartoon,
        description: "Gouache, acrylic, and resin on panel, 24x36",
      },

];

const data3 = [
  {
    title: "Lava",
    price: "$1000",
    photo: lava,
    description: "Gouache, acrylic, and resin on panel, 24x24",
  },
];

function AvailableContainer() {
  return (
    <Container id="gallery-container">
      <Row>
        <Col>
          {data1.map((unitData) => (
            <Photocard data={unitData} />
          ))}
        </Col>
        <Col>
          {data2.map((unitData) => (
            <Photocard data={unitData} />
          ))}
        </Col>
        <Col>
          {data3.map((unitData) => (
            <Photocard data={unitData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default AvailableContainer;
