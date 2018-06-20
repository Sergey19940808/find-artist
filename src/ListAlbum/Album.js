import React, { Component } from 'react';
import './Album.css';

class Album extends Component {

    render() {
        return (
            <div className="app-container-albums__item">
                <img src=
                         {
                             this.props.image["#text"] !== "" ?
                                 this.props.image["#text"] :
                                 "/default_image.png"
                         }
                     width="64"
                     height="64"
                />
            </div>
        );
    }
}

export default Album;