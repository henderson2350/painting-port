import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Photocard from "../components/Photocard"
import GalleryContainer from "../components/GalleryContainer";


function Gallery() {
  return (
    <div>
      <Navbar />
      <GalleryContainer />
    </div>
    
  );
}

export default Gallery;
