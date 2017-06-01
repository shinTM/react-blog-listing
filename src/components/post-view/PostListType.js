import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import PostTitle from '../post-components/PostTitle.js';
import PostTermList from '../post-components/PostTermList.js';
import FeatureImage from '../post-components/FeatureImage.js';

export default class PostListType extends Component {

	render() {
		const { index, postData, termList, imageType } = this.props;

		return(
			<div className = "inner-wrapper">
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
					<p className = "cherry-post__trimed-content" dangerouslySetInnerHTML = {{ __html: postData.trimed_content }}></p>
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
