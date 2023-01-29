import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import "./style.css";
class TableCl extends Component {
  state = { movies: getMovies() };
  render() {
    return (
      <React.Fragment>
        <div className="patata">{this.numberOfMovies()}</div>

        <table className="table patata">
          <thead>
            <tr>
              <th>title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>{movie.numberInStock}</td>
                  <td>
                    <button
                      onClick={() => this.deleteMovie(movie._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
  deleteMovie = (e) => {
    console.log("Hello World");
    this.setState({ movies: deleteMovie(e) });
  };

  numberOfMovies() {
    if (this.state.movies.length === 0) {
      return <p>No movies in the data base</p>;
    }
    return "Showing " + this.state.movies.length + " movies in the data base";
  }
}

export default TableCl;
