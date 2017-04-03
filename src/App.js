import React from 'react';
import ReactDOM from 'react-dom';
import ViewPort from './components/ViewPort/ViewPort.jsx';
import WpData from './data/WpData';

require('./../sass/style.scss');

let wpData = new WpData();


ReactDOM.render(
	<ViewPort/>,
	document.getElementById('blog-listing-page')
);
