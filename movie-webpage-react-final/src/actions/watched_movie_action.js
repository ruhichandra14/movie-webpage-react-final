import * as types from '../constants/actionType';

export function addMovieToWatchList(poster) {  
	console.log('inside action ', poster);
    return {
    	type: 'ADD_MOVIE',
    	payload: poster
    };
}


