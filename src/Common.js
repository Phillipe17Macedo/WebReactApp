import { Link } from 'react-router-dom';

export function Head(){
  return(
    <head>
      <meta lang="pt-br"/>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>React Js Blog</title>
      <link rel="stylesheet" href="./App.css" />
    </head>
  )
}

export function Search(vals){
  return(
    <div id="big-search-bar">
      <div id="search-bar">
        <li><a className="text-search">{vals.nome}</a></li>
      </div>
    </div>
  )
}

export function Navbar(){
  return (
    <header id="header">
        <nav id="navbar"></nav>
          <ul>
            {/* Barra de Navegação */}
            <img src="img/icons8-reagir-40.png" alt="" className="img-logo-icon" />
            <li><Link className="linkBarraNav" to='/'>Home</Link></li>
            <li><Link className="linkBarraNav" to='/Video'>Video</Link></li>
            <li><Link className="linkBarraNav" to='/Sobre'>Sobre nós</Link></li>
          </ul>
    </header>
  )
}

export function Footer(){
  return(
    <footer id="footer">
      <ul>
        <li><a className="linkBarraFinal" href="index.html">Home</a></li>
        <li><a className="linkBarra" href="#about">@alunosamamweb</a></li>
      </ul>
    </footer>
  )
}