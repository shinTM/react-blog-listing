import React from 'react';
import ReactDOM from 'react-dom';
import ViewPort from './components/ViewPort/ViewPort';
import WpData from './data/WpData';

//require('./../sass/style.scss');

let wpData = new WpData();


ReactDOM.render(
	<ViewPort/>,
	document.getElementById('blog-listing-page')
);

/*wpData.getAllPosts().then(
	response => {
		let responseData = JSON.parse( response );


	},
	error => {
		ReactDOM.render(
			<div>`Rejected: ${error}`</div>,
			document.getElementById('blog-listing-page')
		);
	}
);

wpData.getAllCategory().then(
	response => {
		let responseData = JSON.parse( response );
		console.log(responseData);
	},
	error => {
		alert(`Rejected: ${error}`);
	}
);*/
