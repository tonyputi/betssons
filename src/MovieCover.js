import React from "react";
import { Link } from "react-router-dom";

class MovieCover extends React.Component {
    render() {
        return (
            <div>
                <Link to={"/movies/" + this.props.movie.id}>
                    <img src={"/assets/images/movie-covers/" + this.props.movie.img} />
                </Link>
                <br />
                <Link to={"/movies/" + this.props.movie.id}>
                    { this.props.movie.name }
                </Link>
                <p>{ this.props.movie.description }</p>
                <p>Length: { this.props.movie.length }</p>
                <p>Rate: { this.props.movie.rate }</p>
                <p>Genre: { this.props.movie.genres && this.props.movie.genres.join()}</p>
                
            </div>
        );
    }
}

export default MovieCover;