import React ,{ useState } from 'react';
import './App.css';
import { Navbar, Footer, Search } from './Common';

function Video() {
  const handleMouseOver = (event) => {
    const smallImageSrc = event.target.src;
    const bigImage = document.getElementById('big');;

    event.target.src = bigImage.src;
    bigImage.src = smallImageSrc;
  };

  return (
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React Js Blog</title>
        <link rel="stylesheet" href="slyle.css" />
      </head>
      <body>
        <Navbar />

        {/* Search Bar */}
        <Search nome="Mexendo..."/>
          <img id="big" src="img/adventureTime.gif" />
        <Footer />
      </body>
    </html>
  );
}

export default Video;
