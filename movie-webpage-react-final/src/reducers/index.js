import { combineReducers } from 'redux';
import upvoteCountReducer from './reducer_upvote_count';
import downvoteCountReducer from './reducer_downvote_count';
import WatchedMovieReducer from './reducer_watched_movie';
import movieDataReducer from './reducer_search_movie';

const rootReducer = combineReducers({	
	watchedMovie : WatchedMovieReducer,
	upvoteCount : upvoteCountReducer,
	downvoteCount : downvoteCountReducer,
	movieDataJSON : movieDataReducer


});

export default rootReducer;
