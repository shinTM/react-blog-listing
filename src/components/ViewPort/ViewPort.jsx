import React, { Component, PropTypes } from 'react';
import TermList from '../TermList/TermList.jsx';
import PostList from '../PostList/PostList.jsx';

export default class ViewPort extends Component{
	state = {
		titleName: 'Blog Listing',
	};

	render() {
		return(
			<div>
				<h2>{ this.state.titleName }</h2>
				<TermList/>
				<PostList/>
			</div>
		);
	}

}
