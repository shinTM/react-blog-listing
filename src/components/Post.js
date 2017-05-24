import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { TweenMax, Power2 } from 'gsap';

import PostTermList from './post-components/PostTermList.js';

import PostGridType from './post-view/PostGridType.js';
import PostColumnsType from './post-view/PostColumnsType.js';
import PostTimelineType from './post-view/PostTimelineType.js';
import PostListType from './post-view/PostListType.js';

import WpData from '../data/WpData';

class Post extends Component {
	componentWillAppear ( callback ) {
		let container = this.container;
		console.log(123);
		TweenMax.fromTo( container, 1, { opacity: 0}, { opacity: 1, onComplete: callback});
	}

	componentWillLeave ( callback ) {
		let container = this.container;

		TweenMax.fromTo( container, 1, { opacity: 1}, { opacity: 0, onComplete: callback});
	}

	render() {
		const { index, postData, layout, saveTitleHandler } = this.props;
		let orderCountClass = index % 2 == 0 ? 'cherry-post--even' : 'cherry-post--odd';
		let postClasses = `cherry-post ${ postData.format }-format ${ orderCountClass }`;
		let post = null;

		switch ( layout ) {
			case 'grid':
				post = <PostGridType postData = { postData } termList = { this.props.termList } />;
				break;
			case 'columns':
				post = <PostColumnsType postData = { postData } termList = { this.props.termList } />;
				break;
			case 'timeline':
				post = <PostTimelineType postData = { postData } termList = { this.props.termList } />;
				break;
			default :
				post = <PostListType postData = { postData } termList = { this.props.termList } />;
				break;
		}

		return(
			<div className = { postClasses } ref = { ( container ) => this.container = container }>
				{ post }
			</div>
		);
	}
}

export default connect(
	state => ( {
		termList: state.termList
	} ),
)( Post );
