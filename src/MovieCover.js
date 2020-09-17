import React from "react";
import { Link } from "react-router-dom";

class MovieCover extends React.Component {
    render() {
        return (
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <Link to={"/movies/" + this.props.movie.id}>
                    <img class="w-full" src={"/assets/images/movie-covers/" + this.props.movie.img} alt="Sunset in the mountains" />
                </Link>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">
                        <Link to={"/movies/" + this.props.movie.id}>{ this.props.movie.name }</Link>
                    </div>
                    <p class="text-gray-700 text-base">
                        { this.props.movie.description }
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    {this.props.movie.genres.map((genre, index) => (
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{ genre }</span>
                    ))}
                </div>

                <div class="px-6 pt-4 pb-2">
                    <div class="text-sm">
                        <p class="text-gray-900 leading-none mb-2">Rate: { this.props.movie.rate }</p>
                        <p class="text-gray-600">Length: { this.props.movie.length }</p>
                    </div>
                </div>  
            </div>
        );
    }
}

export default MovieCover;