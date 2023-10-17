import React  from 'react';
import './App.css';
import { Search, Navbar, Footer } from './Common';

function Video() {

  return (
    <html lang="pt-br">
      <body id="body">
        <Navbar />

        {/* Search Bar */}
        <Search nome="TRABALHANDO AQUI TELA VIDEO !..."/>
        
          <div className="all">
              <img id="big" src="img/Adventure.gif" />
          </div>
      
        <Footer />
      </body>
    </html>
  );
}

export default Video;
