export function Routes(){
    return(
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/Video" component={Video} />
          <Route path="/Sobre" component={Sobre} />
        </Routes>
    )
}

export default Routes;