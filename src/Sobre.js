import React  from 'react';
import './App.css';
import { Search, Navbar, Footer } from './Common';

function Sobre() {

  return (
    <html lang="pt-br">
      <body id="body">
        <Navbar />

        {/* Search Bar */}
        <Search nome="TRABALHANDO AQUI TELA SOBRE !..."/>
        <div className="all">
            <img id="big" src="img/adventureTime.gif"/>
        </div>
          
        <Footer />
      </body>
    </html>
  );
}

export default Sobre;
