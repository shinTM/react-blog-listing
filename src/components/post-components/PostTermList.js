import React, { Component, PropTypes } from 'react';

export default class PostTermList extends Component {
	render() {
		let { termList, postTerms } = this.props;

		if ( ! termList || ! termList.length ) {
			return(
				<h4>Loading Term List...</h4>
			)
		}

		const postTermList = termList.filter( ( term ) => {
			return postTerms.includes( term.id );
		});

		const postTermListRender = postTermList.map( termData => {
			return (
				<li key = { termData.id }><a href = { termData.link }>{ termData.name }</a></li>
			);
		} );

		console.log(postTermList);
		return(
			<ul className = "cherry-post__terms">
				{ postTermListRender }
			</ul>
		);
	}
}
