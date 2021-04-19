import React, { Component } from 'react';
import './Main.css'
import mainVideoMP4 from '../../resources/video/mainVideo/movie.mp4';
import mainVideoWEB from '../../resources/video/mainVideo/movie.webm';
import Video from "../../Components/Video";
import Header from "../../Components/Header/Header";

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Video class="video" mp4={mainVideoMP4} webm={mainVideoWEB} />
            </div>
        )
    }
}
