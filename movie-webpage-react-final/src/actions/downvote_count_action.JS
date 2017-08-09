import * as types from '../constants/actionType';

export function clickDownvote(){
	return {
			type: 'DECREMENT_COUNT'
	};
}