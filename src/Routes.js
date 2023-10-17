export function Routes(){
    return(
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/Video" exact component={Video} />
          <Route path="/Sobre" exact component={Sobre} />
        </Routes>
    )
}

export default Routes;