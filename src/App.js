import React from 'react';
import ReactDOM from 'react-dom';
import ViewPort from './components/ViewPort.jsx';

require('./../sass/style.scss');

ReactDOM.render(
	<ViewPort/>,
	document.getElementById( 'cherry-post-listing' )
);
