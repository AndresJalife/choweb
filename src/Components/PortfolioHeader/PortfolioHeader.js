import React, { Component } from 'react'
import './portfolioHeader.css'
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";

class PortfolioHeader extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };
    getActualSubPage(path){
        let splitPath = path.split('/');
        if (splitPath.length <= 1) return ''; 
        return splitPath[2];
    }
    render() {
        let subPage = this.getActualSubPage(this.props.match.path);
        return (
            <div id="portfolioHeader">
                <p id={subPage === "cortos" ? "clickeado2" : ""} className="portfolioOptions" onClick={() => this.props.history.push('/portfolio/cortos')}>Cortos</p>
                <p id={subPage === "publicidades" ? "clickeado2" : ""} className="portfolioOptions" onClick={() => this.props.history.push('/portfolio/publicidades')}>Publicidades</p>
                <p id={subPage === "juegos" ? "clickeado2" : ""} className="portfolioOptions" onClick={() => this.props.history.push('/portfolio/juegos')}>Juegos</p>
            </div>
        )
    }
}

export default withRouter(PortfolioHeader);
