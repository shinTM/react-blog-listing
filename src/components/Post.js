import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TransitionGroup from 'react-transition-group/TransitionGroup';

import PostGridType from './post-view/PostGridType.js';
import PostColumnsType from './post-view/PostColumnsType.js';
import PostTimelineType from './post-view/PostTimelineType.js';
import PostListType from './post-view/PostListType.js';

import Settings from '../data/Settings';
import Tools from '../tools/Tools';

class Post extends Component {

	render() {
		const { isVisible, index, postData } = this.props;

		let orderCountClass = index % 2 == 0 ? 'cherry-post--even' : 'cherry-post--odd';
		let postClasses = [
			'cherry-post',
			`${ postData.format }-format`,
			`${ orderCountClass }`
		];

		let post = null;

		switch ( this.props.layout ) {
			case 'grid':
				let ItemColumnClasses = Tools.generateGridItemColumnClasses();

				post = <PostGridType index = { index } postData = { postData } termList = { this.props.termList } imageType = { this.props.imageType } />;
				postClasses = [ ...postClasses, ...ItemColumnClasses ];
				break;
			case 'columns':
				post = <PostColumnsType postData = { postData } termList = { this.props.termList } imageType = { this.props.imageType } />;
				break;
			case 'timeline':
				post = <PostTimelineType postData = { postData } termList = { this.props.termList } imageType = { this.props.imageType } />;
				break;
			default :
				post = <PostListType postData = { postData } termList = { this.props.termList } imageType = { this.props.imageType } />;
				break;
		}

		return(
			<TransitionGroup component = 'div' className = { postClasses.join( ' ' ) }>
				{ isVisible && post }
			</TransitionGroup>
		);
	}
}

export default connect(
	state => ( {
		termList: state.termList,
		postListColumn: state.postListColumn,
		layout: state.layout,
		imageType: state.imageType
	} )
)( Post );
