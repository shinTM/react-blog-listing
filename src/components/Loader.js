import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import { TweenMax, Power2 } from 'gsap';

export default class Loader extends Component{

	componentWillAppear ( callback ) {
		let container = this.container;

		TweenMax.fromTo( container, 1, { opacity: 0}, { opacity: 1, onComplete: callback});
	}

	componentWillLeave ( callback ) {
		let container = this.container;

		TweenMax.fromTo( container, 1, { opacity: 1}, { opacity: 0, onComplete: callback});
	}

	render() {
		const { message } = this.props;

		return(
			<div className = "cherry-post-loader" ref = { ( container ) => this.container = container }>
				<div className = "cherry-post-loader__inner">
					<FontAwesome size = '2x' tag = 'i' spin name = 'spinner' />
					<span className = "cherry-post-loader__message">{ message }</span>
				</div>
			</div>
		);
	}

}
