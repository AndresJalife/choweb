import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './header.css';
import {withRouter} from "react-router-dom";

import logo from '../../resources/img/chowLogo.jpeg';

class Header extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    getActualPage(path){
        return path.split('/')[1];
    }

    render() {
        let page = this.getActualPage(this.props.match.path);
        return (
            <header className="App-header">
                <div id="rightHeader" className="headerButtonsContainer">
                    <div className="headerButton" onClick={() => this.props.history.push('/portfolio')}>
                        <p id={page ==="portfolio" ? "clickeado" : ""}> Portfolio</p>
                    </div>
                    
                    <div className="headerButton" onClick={() => this.props.history.push('/nosotros')}>
                    <p id={page === "nosotros" ? "clickeado" : ""}>Nosotros </p>
                    </div>

                    <div className="headerButton" onClick={() => this.props.history.push('/contacto')}>
                    <p id={page === "contacto" ? "clickeado" : ""}> Contacto</p>
                    </div>
                </div>
                <div className="imageContainer">
                <img src={logo} id="imageLogo" onClick={() => this.props.history.push('/')}/>
                </div>
                <div id="leftHeader" className="headerButtonsContainer">
                {/* <img src="https://img.icons8.com/fluent-systems-regular/36/ffffff/facebook-new--v1.png"/> */}
                    {/* <img src="https://img.icons8.com/material/40/ffffff/instagram-new--v1.png"/>
                    <img src="https://img.icons8.com/ios-glyphs/50/ffffff/youtube-play.png"/> */}
    
                </div>
            </header>
        )
    }
}
export default withRouter(Header);