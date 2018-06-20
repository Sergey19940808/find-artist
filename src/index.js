import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import ListAlbum from "./ListAlbum/ListAlbum";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={App} />
            <Route exact path='/artist/:name' component={ListAlbum} />
        </div>
    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
