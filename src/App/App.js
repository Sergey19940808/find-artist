import React, { Component } from 'react';
import './App.css';
import ListArtist from "../ListArtist/ListArtist";

class App extends Component {
    render() {
        return (
            <div className="app">
                <ListArtist />
            </div>
    );
  }
}

export default App;
