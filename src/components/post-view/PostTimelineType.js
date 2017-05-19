import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';
import PostTermList from '../post-components/PostTermList.js';

export default class PostTimelineType extends Component {

	render() {
		const { postData } = this.props;

		return(
			<div className="inner-wrapper">
				<div className = "cherry-post__meta-info">
					<span className = "post-meta-item post-meta-item--date">
						<FontAwesome tag = 'i' name = 'clock-o' />
						{ postData.custom_format_date }
					</span>
				</div>
				<div className = "cherry-post__content">
					<PostTermList termList = { this.props.termList } postTerms = { postData.categories } />
					<h3 className = "cherry-post__title" onBlur = { ( event ) => saveTitleHandler( postData.id, event ) }>{ postData.title.rendered }</h3>
					<p className = "cherry-post__trimed-content" dangerouslySetInnerHTML = {{ __html: postData.trimed_content }}></p>
					<a className = "cherry-post__permalink" href = { postData.link }>More</a>
				</div>
			</div>
		);
	}
}
