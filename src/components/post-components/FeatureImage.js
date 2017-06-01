import React, { Component, PropTypes } from 'react';

export default class FeatureImage extends Component {
	render() {
		let { type, src, alt } = this.props;

		let styles = {};
		let figureClasses = [
			'cherry-post__thumbnail',
			`cherry-post__thumbnail--${ type }-type`
		];

		if ( 'tag' !== type ) {
			styles.backgroundImage = `url(${ src })`;
		}

		const imageTag = 'tag' == type ? <img alt = { alt } src = { src } /> : null;

		return(
			<figure className = { figureClasses.join( ' ' ) } style = { styles }>
				{ imageTag }
			</figure>
		);
	}
}
