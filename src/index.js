import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store'

import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

import css from './style.css';


const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={PhotoGrid}></IndexRoute>
				<Route path="/view/:postId" component={Single}></Route>
			</Route>
		</Router>
	</Provider>
)

ReactDOM.render(
	router,
	document.getElementById('root')
);
