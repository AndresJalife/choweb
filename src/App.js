import './App.css';
import React from "react";

import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import Main from './Pages/Main/MainPage';
import Contacto from './Pages/Contacto/ContactoPage';
import Portfolio from './Pages/Portfolio/PortfolioPage';
import Nosotros from './Pages/Nosotros/NosotrosPage';
import Cortos from './Pages/Portfolio/Cortos';
import Publicidades from './Pages/Portfolio/Publicidades';
import Juegos from './Pages/Portfolio/Juegos';

function App(props) {
  return (
    <div className="App">
      <main>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contacto" component={Contacto} />
            <Route exact path="/nosotros" component={Nosotros} />
            <Route exact path="/portfolio/juegos" component={Juegos} />
            <Route exact path="/portfolio/cortos" component={Cortos} />
            <Route exact path="/portfolio/publicidades" component={Publicidades} />

        </Switch>
      </main>
    </div>
  );
}

export default App;
