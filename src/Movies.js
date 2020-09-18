import React from 'react';
import { Switch, Route, Link } from "react-router-dom"; 
import MovieCover from "./MovieCover.js"
import MovieDetail from "./MovieDetail.js"
  
class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            data: []
        }
    }
    componentDidMount() {
        this.getMovies();
    }
    getMovies(search) {
        fetch('/movie.mock-data.json')
            .then(response => response.json())
            .then(data => {
                if(search) {
                    let re = new RegExp("^" + search, "i");
                    data = data.filter(function(e) {
                        if(e.name.search(re) > -1) {
                            return e;
                        }
                    })
                }
                this.setState({ data });
            });
    }
    render() {
        return (
            <div class="container mx-auto">
                <h2 class="mb-4 mt-4 text-2xl">Movies</h2>
                <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" 
                    type="text" 
                    placeholder="search for movie name"
                    value={this.search} onChange={ev => this.getMovies(ev.target.value)} placeholder="search for movie name"/>

                <div class="grid grid-cols-3 gap-4 mt-6">
                {this.state.data.map((movie, index) => (
                    <MovieCover key={index} movie={movie} />
                ))}
                </div>
            </div>
        );
    }
}

export default Movies;