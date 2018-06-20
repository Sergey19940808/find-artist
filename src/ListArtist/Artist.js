import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Artist.css';

class Artist extends Component {

    render() {
        return (
            <div className="app-container-artist">
                <ul className="app-container-artist__list">
                    <li className="app-container-artist__item">
                        <Link to={`/artist/${this.props.name}`}>
                            {this.props.name}
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Artist;