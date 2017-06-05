import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import PostTitle from '../post-components/PostTitle.js';
import PostTermList from '../post-components/PostTermList.js';
import FeatureImage from '../post-components/FeatureImage.js';

import { TweenMax, Back } from 'gsap';

import WpData from '../../data/WpData';

export default class PostGridType extends Component {
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
					<PostTermList termList = { this.props.termList } postTerms = { postData.categories } />
				</div>
				<div className = "cherry-post__content">
					<PostTitle id = { postData.id } title = { postData.title.rendered } link = { postData.link } />
					<div className = "cherry-post__meta-info">
						<span className = "post-meta-item post-meta-item--author">
							<a href = { postData.author_data.author_link }>{ postData.author_data.display_name }</a>
						</span>
						<span className = "post-meta-item post-meta-item--date">
							{ postData.custom_format_date }
						</span>
						<span className = "post-meta-item post-meta-item--comments">
							<FontAwesome tag = 'i' name = 'comment' />
							{ postData.comments_amount }
						</span>
					</div>
				</div>
			</div>
		);
	}
}
