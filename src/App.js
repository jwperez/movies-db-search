import React, { Component } from "react";
import Header from "./components/Header.js";
import "./App.css";
import MovieRow from './components/MovieRow.js'
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    // console.log("This is my initializer");

    /* const movies = [
      {id: 0, poster_src: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX182_CR0,0,182,268_AL_.jpg", title: "Avengers Infinity War", overview: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."},
      {id: 1, poster_src: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", title: "Avengers Infinity War", title: "The Avengers", overview: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."}
    ]

    var moiveRows = []
    movies.forEach((movie) => {
      console.log(movie.title);

      const movieRow = <MovieRow movie={movie}/>

      moiveRows.push(movieRow)
    })

    this.state = {rows: moiveRows} */

    this.performSearch("Jurassic")
  }

  performSearch(searchTerm) {
    console.log("Perform Search...");
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=4a385a51d12b2d6461981b61491ea90e&language=en-US&query=" + searchTerm
    $.ajax({
      url: urlString, 
      success: (searchResults) => {
        console.log("Fetched data successfully!");

        const results = searchResults.results
        console.log(results[0]);

        var movieRows = []
        
        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          // console.log(movie.poster_path);
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
        
      }
    })
  }

  searchChangeHandler = (event) => {
    this.performSearch(event.target.value)
  }

  render() {
    return (
      <div>
        <Header />
        <input className="search" onChange={this.searchChangeHandler} placeholder="Enter search term" />

        {this.state.rows}
      </div>
    );
  }
}

export default App;