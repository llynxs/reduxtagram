import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import posts from './postReducer';
import comments from './commentsReducer';

const AllReducers = combineReducers({
	posts,
	comments,
	routing: routerReducer
});

export default AllReducers;