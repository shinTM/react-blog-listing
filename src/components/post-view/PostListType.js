import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import PostTitle from '../post-components/PostTitle.js';
import PostTermList from '../post-components/PostTermList.js';
import FeatureImage from '../post-components/FeatureImage.js';
import PostExcerpt from '../post-components/PostExcerpt.js';

import { TweenMax, Back } from 'gsap';

import WpData from '../../data/WpData';

export default class PostListType extends Component {

	componentWillAppear ( callback ) {
		let container = this.container;

		TweenMax.from( container, 0.75,
			{
				y: 25,
				opacity: 0,
				delay: WpData.tempDelay+=0.1,
				ease: Expo.easeOut,
				onComplete: callback
			}
		);
	}

	componentWillEnter (callback) {
		let container = this.container;

		TweenMax.from( container, 0.75,
			{
				y: 25,
				opacity: 0,
				delay: WpData.tempDelay+=0.1,
				ease: Expo.easeOut,
				onComplete: callback
			}
		);
	}

	render() {
		const { index, postData, termList, imageType } = this.props;

		return(
			<div className = "inner-wrapper" ref = { ( container ) => this.container = container }>
				<div className = "cherry-post__media">
					<FeatureImage
						type = { imageType }
						src = { postData.featured_image_src }
						alt = { postData.title.rendered }
					/>
				</div>
				<div className = "cherry-post__content">
					<PostTermList termList = { this.props.termList } postTerms = { postData.categories } />
					<PostTitle title = { postData.title.rendered } link = { postData.link } />
					<PostExcerpt id = { postData.id } excerpt = { postData.excerpt } />
					<div className = "cherry-post__meta-info">
						<span className = "post-meta-item post-meta-item--author">
							<FontAwesome tag = 'i' name = 'user' /> <a href = { postData.author_data.author_link }>{ postData.author_data.display_name }</a>
						</span>
						<span className = "post-meta-item post-meta-item--date">
							<FontAwesome tag = 'i' name = 'clock-o' />
							{ postData.custom_format_date }
						</span>
					</div>
				</div>
			</div>
		);
	}
}
