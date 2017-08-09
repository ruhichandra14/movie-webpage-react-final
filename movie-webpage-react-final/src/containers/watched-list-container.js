import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import WatchedListComponent from '../components/watched-list-comp';
import { addMovieToWatchList } from '../actions/watched_movie_action';

class WatchedList extends Component{
	render(){
		console.log("*******props are******** ",this.props);
		return(
			<div>
				<WatchedListComponent {...this.props}/>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		watchedMovie : state.watchedMovie
	}
}


function mapDispatchToProps(dispatch){
	return bindActionCreators({addMovieToWatchList : addMovieToWatchList}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WatchedList);