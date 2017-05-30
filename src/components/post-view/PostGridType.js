import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import PostTermList from '../post-components/PostTermList.js';
import { TweenMax, Back } from 'gsap';

import WpData from '../../data/WpData';

export default class PostGridType extends Component {
	componentWillAppear ( callback ) {
		let container = this.container;

		TweenMax.fromTo( container, 0.75,
			{
				y: 150,
				z:-200,
				rotationX: -90,
				opacity: 0,
			},
			{
				y: 0,
				z: 0,
				rotationX: 0,
				opacity: 1,
				transformOrigin: 'center top',
				ease: Expo.easeOut,
				onComplete: callback
			}
		);
	}

	componentWillLeave (callback) {
		let container = this.container;

		TweenMax.to( container, 0,
			{
				y: -20,
				opacity: 0,
				ease: Power2.easeIn,
				onComplete: callback
			}
		);
	}

	componentWillEnter (callback) {
		let container = this.container;

		WpData.tempDelay += 0.1;

		TweenMax.fromTo( container, 1,
			{
				z:-500,
				rotationX: -45,
				opacity: 0,
			},
			{
				z: 0,
				rotationX: 0,
				opacity: 1,
				delay: WpData.tempDelay,
				transformOrigin: 'center bottom',
				ease: Expo.easeOut,
				onComplete: callback
			}
		);
	}

	render() {
		const { index, postData, termList } = this.props;

		return(
			<div className="inner-wrapper" ref = { ( container ) => this.container = container }>
				<div className = "cherry-post__media">
					<figure className = "cherry-post__thumbnail">
						<img alt = { postData.title.rendered } src = { postData.featured_image_src }/>
					</figure>
				</div>
				<div className = "cherry-post__content">
					<div className = "cherry-post__meta-info">
						<span className = "post-meta-item post-meta-item--author">
							<FontAwesome tag = 'i' name = 'user' /> <a href = { postData.author_data.author_link }>{ postData.author_data.display_name }</a>
						</span>
						<span className = "post-meta-item post-meta-item--date">
							<FontAwesome tag = 'i' name = 'clock-o' />
							{ postData.custom_format_date }
						</span>
					</div>
					<PostTermList termList = { this.props.termList } postTerms = { postData.categories } />
					<h3 className = "cherry-post__title" onBlur = { ( event ) => saveTitleHandler( postData.id, event ) }>{ postData.title.rendered }</h3>
					<p className = "cherry-post__trimed-content" dangerouslySetInnerHTML = {{ __html: postData.trimed_content }}></p>
					<a className = "cherry-post__permalink" href = { postData.link }>More</a>
				</div>
			</div>
		);
	}
}
