import React, { Component } from 'react'
import './Portfolio.css'
import Header from "../../Components/Header/Header";
import PortfolioHeader from '../../Components/PortfolioHeader/PortfolioHeader';


export default class PortfolioPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <PortfolioHeader/>
            </div>
        )
    }
}
