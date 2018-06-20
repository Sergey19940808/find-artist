import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Album.css';
import Album from "./Album";
import axios from "axios/index";
import {host} from "../Config/API";

class ListAlbum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
        }
    }

    componentWillMount() {
        axios.get(`${host["name"]}?method=artist.gettopalbums&artist=${this.props.match.params.name}&api_key=${host["api_key"]}&format=json`)
            .then((res)=>{
                this.setState({albums: res.data.topalbums.album})
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    render() {
        return (
            <div className="app">
                <div className="app-container-albums">
                    <div className="app-container-albums__name">
                        Исполнитель - {this.props.match.params.name}
                    </div>
                    <div className="app-container-albums__list-items">
                        {

                            this.state.albums.map((i)=>{
                                return(
                                    <Album
                                        key={i.name}
                                        image={i.image[1]}
                                    />
                                )
                            })
                        }
                    </div>
                    <div className="app-container-albums__link-back">
                        <Link to="/">
                            Вернуться назад
                        </Link>
                    </div>

                </div>
            </div>
        );
    }
}

export default ListAlbum;