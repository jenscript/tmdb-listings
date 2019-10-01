import React from 'react';
import Header from './header'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class Home extends React.Component {
  
  constructor(props) {
  	super(props)

  	this.state = {
  		nowPlaying: [],
  		config: [],
  		ratingFilter: 3,
  	}
  }

  componentDidMount() {
  	fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=67b21e61bd995d6b696e96330d6f76a3&language=en-US&page=1&plot=full')
  		.then(response => response.json())
  		.then(data => this.setState({ nowPlaying: data.results }))

  	fetch('https://api.themoviedb.org/3/configuration?api_key=67b21e61bd995d6b696e96330d6f76a3')
  		.then(response => response.json())
  		.then(data => this.setState({ config: data.images }))
  }

  updateRating = ratingFilter => {
  	this.setState({
  		ratingFilter: ratingFilter
  	})
  }

  render() {
  	const { nowPlaying, config, ratingFilter } = this.state

  	const genresArr = [
		  { id: 28, name: "Action " },
		  { id: 12, name: "Adventure " },
		  { id: 16, name: "Animation " },
		  { id: 35, name: "Comedy " },
		  { id: 80, name: "Crime " },
		  { id: 99, name: "Documentary " },
		  { id: 18, name: "Drama " },
		  { id: 10751, name: "Family " },
		  { id: 14, name: "Fantasy " },
		  { id: 36, name: "History " },
		  { id: 27, name: "Horror " },
		  { id: 10402, name: "Music " },
		  { id: 9648, name: "Mystery " },
		  { id: 10749, name: "Romance " },
		  { id: 878, name: "Science Fiction " },
		  { id: 10770, name: "TV Movie " },
		  { id: 53, name: "Thriller " },
		  { id: 10752, name: "War " },
		  { id: 37, name: "Western " }
		]

		//Order by popularity
		const nowPlayingOrdered = nowPlaying.slice(0);
		nowPlayingOrdered.sort(function(a,b) {
		    return b.popularity - a.popularity
		});

		//Filters the list based on the selected rating in the dropdown
		const filteredByRating = nowPlayingOrdered.filter(function(film) {
			return film.vote_average > ratingFilter
		})

		//Loop through the ordered data and get the title and genre_ids
  	const nowPlayingMap = filteredByRating.map(({ title, genre_ids, poster_path }) => {
		  
		  //The data contains genre IDs and we need the names
		  const genreNames = genre_ids.map(gid => 
		  	genresArr.find(({ id }) => id === gid).name
		  )
		  
		  return (
		  	<div class="film">
		  		<div className="poster">
		  			<img src={config.base_url + '/w500/' + poster_path} />
		  		</div>
		  		<div className="meta">
		  			<h3>{title}</h3>
		  			<h4>{genreNames}</h4>
		  		</div>
		  	</div>
		  )
		})

    return (
      <div className="tmdb-listings">
				<div className="container">
					<Header />
					<div className="row">
						<div className="col-sm-3">
							<div className="filters">
								<h2>Rating</h2>
								<h3>{this.state.ratingFilter} / 10</h3>
								<Slider min={0} max={10} step={0.5} defaultValue={3} onChange={this.updateRating}/>
							</div>
						</div>
						<div className="col-sm-9">
							<div className="row">
								{ nowPlayingMap }
							</div>
						</div>
					</div>
				</div>
      </div>
    )
  }
}

export default Home;
