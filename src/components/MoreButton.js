import React, { Component, PropTypes } from 'react';
import WpData from '../data/WpData';

export default class MoreButton extends Component{

	render() {
		const { isLoaded, postPerPage, onLoadMore } = this.props;

		if ( ! isLoaded ) {
			return false;
		}

		if ( postPerPage >= WpData.allPosts.length ) {
			return false;
		}

		return(
			<div className = "cherry-post-controls__more-button">
				<div className = "more-button" onClick = { ( event ) => onLoadMore() }>Load more</div>
			</div>
		);
	}

}
