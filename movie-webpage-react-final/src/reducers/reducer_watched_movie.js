export default function(state = null , action){
	switch (action.type){
		case 'ADD_MOVIE':
		return action.payload;
	}
	return state;
}

