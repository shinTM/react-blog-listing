import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './components/Blog/Blog';
import WpData from './data/wpdata';

require('./../sass/style.scss');

let wpData = new WpData();

wpData.httpGet( 'http://localhost:8888/cherry5-dev/wp-json/wp/v2/posts' ).then(
	response => {
		let responseData = JSON.parse( response );

		ReactDOM.render(
			<Blog data={ responseData }/>,
			document.getElementById('blog-listing-page')
		);
	},
	error => alert(`Rejected: ${error}`)
);
