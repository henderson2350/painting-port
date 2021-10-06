import React from "react";
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import "./style.css";

function HomepageContent() {
  return (
    <div id="content">
      <p id="text">
        <Link id="linkid" to="/gallery">
          <p>CLARE</p>
          <p>HENDERSON</p>
        </Link>
      </p>
    </div>
  )
}

export default HomepageContent;
