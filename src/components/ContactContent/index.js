import React from "react";
import "./style.css";

function ContactContent() {
  return (
    <div id="contact-content">
      <div id="contact-info">
        <p>clarehendersonart@gmail.com</p>
        <p>+1 404 316 4330</p>
        <p>instagram: @clarehendersonart</p>
      </div>
      <br></br>
      <div id="poppy-info">
        <p>To shop works available through the Poppy Society,</p>
        <a
          href="https://thepoppysociety.com/artists/clarehenderson"
          target="_blank"
        >
          click here.
        </a>
      </div>
    </div>
  );
}

export default ContactContent;
