import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import PostTermList from './post-components/PostTermList.js';

import PostGridType from './post-view/PostGridType.js';
import PostColumnsType from './post-view/PostColumnsType.js';
import PostTimelineType from './post-view/PostTimelineType.js';
import PostListType from './post-view/PostListType.js';

import WpData from '../data/WpData';

class Post extends Component {

	render() {
		const { isVisible, index, postData, layout, saveTitleHandler } = this.props;

		let orderCountClass = index % 2 == 0 ? 'cherry-post--even' : 'cherry-post--odd';
		let postClasses = `cherry-post ${ postData.format }-format ${ orderCountClass }`;
		let post = null;

		switch ( layout ) {
			case 'grid':
				post = <PostGridType index = { index } postData = { postData } termList = { this.props.termList } />;
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
			<TransitionGroup component = 'div' className = { postClasses }>
				{ isVisible && post }
			</TransitionGroup>
		);
	}
}

export default connect(
	state => ( {
		termList: state.termList
	} ),
)( Post );
