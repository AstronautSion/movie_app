import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  //Render: componentWillMount()  ->  render()  ->  componentDidMount()
  //update: compomentWillReceiveProps()  ->  shouldComponentUpdate()  ->  componentWillUpdate()  ->  render()  ->  componentDidUpdate()


  state ={
  }


  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies:[
          {
            title: "Matrix",
            poster: "https://images-na.ssl-images-amazon.com/images/I/51k1epcewKL.jpg"
          },
          {
            title: "Hunger Games",
            poster: "https://s-media-cache-ak0.pinimg.com/originals/e4/b7/f0/e4b7f0a895ee785af8d25fd34cc3c780.jpg"
          },
          {
            title: "Oldboy",
            poster:  "https://upload.wikimedia.org/wikipedia/en/6/67/Oldboykoreanposter.jpg"
          },
          {
            title: "Star Wars",
            poster: "http://imgc.allpostersimages.com/img/posters/star-wars-the-force-awakens-one-sheet_u-L-F8G58H0.jpg"
          },
          {
            title: "Inseption",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI4NDk5NDgzN15BMl5BanBnXkFtZTcwNzU0OTk1Mw@@._V1_SY1000_CR0,0,685,1000_AL_.jpg"
          }
        ]
      })
    },5000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {      
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies;
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
