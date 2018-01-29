import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  //Render: componentWillMount()  ->  render()  ->  componentDidMount()
  //update: compomentWillReceiveProps()  ->  shouldComponentUpdate()  ->  componentWillUpdate()  ->  render()  ->  componentDidUpdate()

  state ={}
	  
  componentDidMount(){
    this._getMovies();
	console.log('hi');
  }
  
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {      
      console.log(movie);
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres ={movie.genres}
        synopsis = {movie.synopsis}
        year = {movie.year}
      />
    })
    return movies;
  }

   _getMovies = async() =>{ //순서와 상관없이 진행 
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }
  
  _callApi = () =>{
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies )
    .catch(err => console.log(err))
  }

  _ChangeList = () =>{

  }

  render() {
    const {movies} = this.state;
    return (
      <div className="App">

          <div className={movies ? "App__Change__Button" : "blind"}>
            <button type="button">button</button>
            <button type="button">button</button>
            <button type="button">button</button>
            <button type="button">button</button>
          </div>

          <div className={movies ? "App" : "App__loading"} >
            {movies ? this._renderMovies() : 'Loading...'}
          </div>
      </div>
    );
  }
}

export default App;
