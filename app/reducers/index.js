import {combineReducers} from 'redux';
import some from './some';

export const initialState = {
	loading: false,
	error  : null,
	data   : null,
};

const
	app = combineReducers({
		some,
	});

export default app;
