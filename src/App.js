import React from 'react';
import ReactDOM from 'react-dom';
import { categories } from './data/categories';
import Categories from './components/Categories/Categories';
import WpData from './data/get-data';

require('./../sass/style.scss');

let wpData = new WpData();

wpData.httpGet( 'http://localhost:8888/cherry5-dev/wp-json/wp/v2/posts' ).then(
	response => {
		console.log(JSON.parse(response));
	},
	error => alert(`Rejected: ${error}`)
);

ReactDOM.render(
    <Categories categories={ categories }/>,
    document.getElementById('blog-listing-page')
);
