import React, { Component, PropTypes } from 'react';

export default class MoreButton extends Component{

	render() {
		const { onLoadMore } = this.props;

		return(
			<div className = "cherry-post-controls__more-button">
				<div className = "more-button" onClick = { ( event ) => onLoadMore() }>Load more</div>
			</div>
		);
	}

}
