import React, { Component, PropTypes } from 'react';

export default class PostTitle extends Component {
	render() {
		let { title, link } = this.props;

		return(
			<h2 className = "cherry-post__title"><a href = { link }>{ title }</a></h2>
		);
	}
}
