import './App.css';
import React from "react";

import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import Main from './Pages/Main/MainPage';
import logo from './resources/img/chowLogo.jpeg';
import Contacto from './Pages/Contacto/ContactoPage';
import Portfolio from './Pages/Portfolio/PortfolioPage';
import Nosotros from './Pages/Nosotros/NosotrosPage';

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <header className="App-header">
          <div id="rightHeader" className="headerButtonsContainer">
              <div className="headerButton" onClick={() => history.push('/portfolio')}>
                  <p> Portfolio</p>
              </div>
              
              <div className="headerButton">
                <p>Nosotros </p>
              </div>
              <div className="headerButton">
                <p> Contacto</p>
              </div>
          </div>
          <div className="imageContainer">
            <img src={logo} id="imageLogo" onClick={() => history.push('/')}/>
          </div>
          <div id="leftHeader" className="headerButtonsContainer">
            {/* <img src="https://img.icons8.com/fluent-systems-regular/36/ffffff/facebook-new--v1.png"/> */}
              {/* <img src="https://img.icons8.com/material/40/ffffff/instagram-new--v1.png"/>
              <img src="https://img.icons8.com/ios-glyphs/50/ffffff/youtube-play.png"/> */}

          </div>

      </header>
      <main>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contacto" component={Contacto} />
            <Route exact path="/nosotros" component={Nosotros} />

        </Switch>
      </main>
    </div>
  );
}

export default App;
