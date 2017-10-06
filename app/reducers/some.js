import {initialState} from './';

const
	some = (state = initialState, action) => {
		switch(action.type) {
		case'INITIAL_ACTION':
			return {...state, data: action.payload};
		default:
			return state;
		}
	};

export default some;
