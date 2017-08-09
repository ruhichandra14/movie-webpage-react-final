export default function(state = 0, action){
	switch(action.type){
		case 'INCREMENT_COUNT':
			let newState =  state + 1;
       		return newState;
	}
	return state;
}