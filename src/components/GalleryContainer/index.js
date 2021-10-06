import React, { useState } from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";

import Photocard from "../Photocard";
import carolineLane from "../../photos/carolineLane.jpg";
import cartoon from "../../photos/cartoon.jpg";
import glitterGrain from "../../photos/glitterGrain.jpg";
import jewel from "../../photos/jewel.jpg";
import joHerget from "../../photos/joHerget.jpg";
import priceCiolino from "../../photos/priceCiolino.jpg";
import wendyCiolino from "../../photos/wendyCiolino.jpg";
import lava from "../../photos/lava.JPG";
import thermal from "../../photos/thermal.jpg";
import weiner from "../../photos/izard.JPG"
import izardNursery from "../../photos/izardNursery.jpg"
import izard from "../../photos/izardGreen.jpg"

function GalleryContainer() {
  const data1 = [
    {
      title: "Commission",
      price: "SOLD",
      photo: carolineLane,
      description: "Oil, acrylic, and resin on panel, 24x24",
    },
    {
      title: "Cartoon",
      price: "$900",
      photo: cartoon,
      description: "Gouache, acrylic, and resin on panel, 24x36",
    },
    {
      title: "Commission",
      price: "SOLD",
      photo: wendyCiolino,
      description: "Oil, acrylic, and resin on panel, 36x36",
    },
    {
      title: "Commission",
      price: "SOLD",
      photo: izard,
      description: "Oil, acrylic, and resin on panel, 21x36",
    },
  ];

  const data2 = [
    {
      title: "Glitter grain",
      price: "$1000",
      photo: glitterGrain,
      description: "Gouache, acrylic, and glitter on panel, 20x20",
    },
    {
      title: "Commission",
      price: "SOLD",
      photo: weiner,
      description: "Gouache, acrylic, and resin on panel, 20x40",
    },
    {
      title: "Jewel",
      price: "SOLD",
      photo: jewel,
      description: "Oil, acrylic, and resin on panel, 30x30",
    },
    {
      title: "Lava",
      price: "$1000",
      photo: lava,
      description: "Gouache, acrylic, and resin on panel, 24x24",
    },

  ]

  const data3 = [
    {
      title: "Commission",
      price: "SOLD",
      photo: joHerget,
      description: "Acrylic and resin on panel, 20x20",
    },
    {
      title: "Commission",
      price: "SOLD",
      photo: priceCiolino,
      description: "Acrylic and resin on panel, 2 10x20",
    },
    {
      title: "Thermal",
      price: "$1500",
      photo: thermal,
      description: "Acrylic and resin on panel, 36x36",
    },
    {
      title: "Commission",
      price: "SOLD",
      photo: izardNursery,
      description: "Acrylic and resin on panel, 36x36",
    },
  ]

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

export default GalleryContainer;
