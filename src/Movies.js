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
        // fetch('/movie.mock-data.json')
        //     .then(response => response.json())
        //     .then(data => this.setState({ data }));
    }
    getMovies(search) {
        fetch('/movie.mock-data.json')
            .then(response => response.json())
            .then(data => {
                if(search) {
                    let re = new RegExp("^" + search, "i");

                    data = data.filter(function(e) {
                        if(e.name.search(re) > -1) {
                            console.log(e.name, search);
                            return e;
                        }
                    })
                }

                console.log(data);
                this.setState({ data });
            });
            // .then(data => this.setState({ data }));
    }
    render() {
        return (
            <div>
                <h2>Movies</h2>

                <input type="text" value={this.search} onChange={ev => this.getMovies(ev.target.value)} placeholder="search for movie name"/>
          
                {this.state.data.map((movie, index) => (
                    <MovieCover key={index} movie={movie} />
                ))}

                {/* <Switch>
                    <Route path="/movies/:id" children={<MovieDetail movie={movie} />} />
                </Switch> */}
            </div>
        );
    }
}

function getMovies() {
        
}

export default Movies;