export default function(state = 0, action){

	switch(action.type){
		case 'DECREMENT_COUNT':
		console.log('entered decrement count');
			let newState =  state - 1;
       		return newState;
	}
	return state;
}