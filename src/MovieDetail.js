import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";

class MovieDetail extends React.Component {
    // let { id } = useParams();

    render() {
        return (
            <div>
                <img src={"/assets/images/movie-covers/" + this.props.movie.img} />
                <h2>{ this.props.movie.name }</h2>
                <p>{ this.props.movie.description }</p>
                <p>Length: { this.props.movie.length }</p>
                <p>Rate: { this.props.movie.rate }</p>
                <p>Genre: { this.props.movie.genres && this.props.movie.genres.join()}</p>
            </div>
        );
    }
}

export default MovieDetail;