import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

import PostTermList from './post-components/PostTermList.js';

import PostGridType from './post-view/PostGridType.js';
import PostColumnsType from './post-view/PostColumnsType.js';
import PostTimelineType from './post-view/PostTimelineType.js';
import PostListType from './post-view/PostListType.js';

import WpData from '../data/WpData';

import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Post extends Component {

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
			<div className = { postClasses }>
				<CSSTransitionGroup
					transitionName = "example"
					transitionAppear = { true }
					transitionEnter = { true }
					transitionLeave = { true }
					transitionAppearTimeout = { 500 }
					transitionEnterTimeout = { 500 }
					transitionLeaveTimeout = { 300 }>
				{ post }
				</CSSTransitionGroup>
			</div>
		);
	}
}

export default connect(
	state => ( {
		termList: state.termList
	} ),
)( Post );
