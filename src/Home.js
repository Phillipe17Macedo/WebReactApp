import React  from 'react';
import './App.css';
import {Navbar, Search, Footer } from './Common';

function Home(){
    const handleMouseOver = (event) => {
        const smallImageSrc = event.target.src;
        const bigImage = document.getElementById('big');;
    
        event.target.src = bigImage.src;
        bigImage.src = smallImageSrc;
    };

    return(
        <html lang='pt-br'>
        <body id="body">
            {/* Barra de Navegação importada do arquivo "Common"*/}
            <Navbar/>

            {/* Barra de Busca (importada) */}
            <Search nome="Home"/>
            <div id="all">
            <img id="big" src="img/reactNative.png" />
            <ul>
                <li><img src="img/Etapa_1.png" className="smally" onMouseOver={handleMouseOver}/></li>
                <li><img src="img/Etapa_1.1.png" className="smally" onMouseOver={handleMouseOver}/></li>
                <li><img src="img/Etapa_2.png" className="smally" onMouseOver={handleMouseOver}/></li>
                <li><img src="img/Etapa_2.1.png" className="smally" onMouseOver={handleMouseOver}/></li>
                <li><img src="img/Etapa_2.2.png" className="smally" onMouseOver={handleMouseOver}/></li>
                <li><img src="img/Etapa_2.3.png" className="smally" onMouseOver={handleMouseOver}/></li>
            </ul>
            </div>

            <div className="etapas">
                <h2 className="etapas-class">Etapa 1: Configurar Ambiente JavaScript Modular</h2>
                <img src="img/Etapa_1.png" alt="" id="big" />
            </div>
            <div className="etapas">
                <h2 className="etapas-class">Etapa 1.1: Continuação Etapa 1</h2>
                <img src="img/Etapa_1.1.png" alt="" id="big" />
            </div>
            <div className="etapas">
                <h2 className="etapas-class">Etapa 2: Renderize os Componentes do React em Qualquer Lugar da Página</h2>
                <img src="img/Etapa_2.png" alt="" id="big" />
            </div>
            <div className="etapas">
                <h2 className="etapas-class">Etapa 2.1: Continuação Etapa 2</h2>
                <img src="img/Etapa_2.1.png" alt="" id="big" />
            </div>
            <div className="etapas">
                <h2 className="etapas-class">Etapa 2.2: Continuação Etapa 2.1</h2>
                <img src="img/Etapa_2.2.png" alt="" id="big" />
            </div>
            <div className="etapas">
                <h2 className="etapas-class">Etapa 2.3: Continuação Etapa 2.2</h2>
                <img src="img/Etapa_2.3.png" alt="" id="big" />
            </div>


            {/* Footer (importado)*/}
            <Footer />
        </body>
        </html>
    )
}

export default Home;