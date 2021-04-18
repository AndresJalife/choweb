import React, { Component } from 'react'

export default class Video extends Component {
    render() {
        return (
            <div class="videoContainer">
                <video autoPlay loop muted className={this.props.class} >
                    <source src={this.props.webm} type="video/webm"/>
                    <source src={this.props.mp4} type="video/mp4"/>

                    Your browser does not support the video tag.
                </video>
            </div>
        )
    }
}
