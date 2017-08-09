import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MovieComponent from '../components/movie-comp'
import { addMovieToWatchList } from '../actions/watched_movie_action';
import { clickUpvote } from '../actions/upvote_count_action';
import { clickDownvote } from '../actions/downvote_count_action';
import { searchMovie } from '../actions/search_movie_action';

class MovieApp extends Component{
	render(){
		console.log('entered the app ',this.props);
		return(
			<div>
				<MovieComponent {...this.props}/>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		watchedMovie : state.watchedMovie,
		upvoteCount : state.upvoteCount,
		downvoteCount : state.downvoteCount,
		movieDataJSON : state.movieDataJSON

	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({addMovieToWatchList : addMovieToWatchList, clickUpvote : clickUpvote, clickDownvote : clickDownvote, searchMovie : searchMovie}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieApp);