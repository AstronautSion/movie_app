import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  //Render: componentWillMount()  ->  render()  ->  componentDidMount()
  //update: compomentWillReceiveProps()  ->  shouldComponentUpdate()  ->  componentWillUpdate()  ->  render()  ->  componentDidUpdate()

  state ={}
  
  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {      
      console.log(movie);
      return <Movie title={movie.title_english} poster={movie.large_cover_image} key={index} />
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
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies )
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading...'}
      </div>
    );
  }
}

export default App;
