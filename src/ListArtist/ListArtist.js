import React, { Component } from 'react';
import axios from 'axios';
import './Artist.css';
import Artist from "./Artist";
import { host } from "../Config/API.js"

class ListArtist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: [],
            textResult: "Введите название исполнителя"
        }
    }

    componentWillMount() {
        this.setState({artists: JSON.parse(localStorage.getItem("artists"))})
    }

    handleShowArtists() {

        let artistName = document.querySelector(".app-container-artists__search-input").value;

        if (artistName !== "") {
            axios.get(`${host["name"]}?method=artist.search&artist=${artistName}&api_key=${host["api_key"]}&format=json`)

                .then((res) => {

                    if (res.data.results.artistmatches.artist.length > 0) {
                        this.setState({artists: res.data.results.artistmatches.artist});
                        localStorage.setItem("artists", JSON.stringify(res.data.results.artistmatches.artist));

                    } else {
                        this.setState({textResult: "Не найдено ни одного исполнителя"});
                        this.setState({artists: []});

                        localStorage.setItem("artists", JSON.stringify([]));
                        setTimeout(() => {
                            this.setState({textResult: "Введите название исполнителя"})
                        }, 1500)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            this.setState({textResult: "Вы не ввели имя исполнителя"});
            this.setState({artists: []});
            setTimeout(() => {
                this.setState({textResult: "Введите название исполнителя"})
            }, 1500)
        }
    }

    render() {

        return (
            <div className="app-container-artists">
                <label className="app-container-artists__search">
                    <span className="app-container-artists__search-title">
                        Поиск:
                    </span>
                    <input type="text"
                           className="app-container-artists__search-input"
                    />
                </label>
                <span className="app-container-artists__search-button">
                    <span className="app-container-artists__search-button-text"
                          onClick={this.handleShowArtists.bind(this)}
                    >
                        Найти
                    </span>
                </span>

                <div className="app-container-artists__search-result">
                    {
                        this.state.artists.length > 0 ?
                            this.state.artists.map((i)=>{
                                return (
                                    <Artist
                                        key={i.name}
                                        name={i.name}
                                    />
                                )
                            }) : <em>{this.state.textResult}</em>
                    }
                </div>

            </div>
        );
    }
}

export default ListArtist;