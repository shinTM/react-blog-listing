import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import ViewPort from './components/ViewPort.js';

import reducer from './reducers';

require('./../sass/style.scss');


const store = createStore( reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

ReactDOM.render(
	<Provider store={ store }>
		<ViewPort />
	</Provider>,
	document.getElementById( 'cherry-post-listing' )
);
