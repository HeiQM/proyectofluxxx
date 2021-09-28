import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cinesensacional from "./views/Cinesensacional";
import Peliculas from "./views/Peliculas";
import Personas from "./views/Personas";
import Programastv from "./views/Programastv";


function App() {

  return (
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path="/">
            <Cinesensacional/>
          </Route>
          <Route exact path="/peliculas">
            <Peliculas/>
          </Route>
          <Route exact path="/person">
            <Personas/>
          </Route>
          <Route exact path="/progtv">
            <Programastv/>
          </Route>
          <Route to="*">
            <h2>Not found - 404</h2>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
