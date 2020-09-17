import React from "react";

class MovieDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {}
        }
    }
    componentDidMount() {
        this.getMovie(this.props.id);
    }
    getMovie(id) {
        fetch('/movie.mock-data.json')
            .then(response => response.json())
            .then(movie => {
                movie = movie.find(function(e) {
                    if(e.id == id) {
                        return e;
                    }
                })
                this.setState({ movie });
            });
    }
    render() {
        return (
            <div class="container mx-auto">
                <div class="max-w-sm w-full lg:max-w-full mt-4">
                
                    <div class="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white p-4 flex flex-col leading-normal">
                        <img class="object-contain w-full" src={"/assets/images/movie-covers/" + this.state.movie.img} />        
                        <div class="mb-8">
                            <div class="text-gray-900 font-bold text-xl mb-2">{ this.state.movie.name }</div>
                            <p class="text-gray-700 text-base">{ this.state.movie.description }</p>
                        </div>

                        <div class="flex items-center">
                            <div class="text-sm">
                                <p class="text-gray-900 leading-none mb-3">Rate: { this.state.movie.rate }</p>
                                <p class="text-gray-600">Length: { this.state.movie.length }</p>
                            </div>
                        </div>

                        <div class="pt-4 pb-2">
                            {this.state.movie.genres && this.state.movie.genres.map((genre, index) => (
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{ genre }</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieDetail;