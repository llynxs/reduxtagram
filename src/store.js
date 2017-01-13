import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';


//root reducers
import AllReducers from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

//obj for default data

const defaultState = {
	posts,
	comments
}

const store = createStore(AllReducers, defaultState);
export const history = syncHistoryWithStore(browserHistory, store); 

export default store;