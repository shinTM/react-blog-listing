import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

import PostTermList from './post-components/PostTermList.js';

import WpData from '../data/WpData';

class Post extends Component {

	render() {
		const { postData, saveTitleHandler } = this.props;
		let postDate = postData.custom_format_date;

		return(
			<div className="inner-wrapper">
				<figure className = "cherry-post__thumbnail">
					<img alt = { postData.title.rendered } src = { postData.featured_image_src }/>
				</figure>
				<div className = "cherry-post__meta-info">
					<span className = "post-meta-item post-meta-item--author">
						<FontAwesome tag = 'i' name = 'user' /> <a href = { postData.author_data.author_link }>{ postData.author_data.display_name }</a>
					</span>
					<span className = "post-meta-item post-meta-item--date">
						<FontAwesome tag = 'i' name = 'clock-o' />
						{ postDate }
					</span>
				</div>
				<PostTermList termList = { this.props.termList } postTerms = { postData.categories } />
				{/*<h3 contentEditable="true" onBlur={ ( event ) => saveTitleHandler( postData.id, event ) }>{ postData.title.rendered }</h3>*/}
				<h3 className = "cherry-post__title" onBlur={ ( event ) => saveTitleHandler( postData.id, event ) }>{ postData.title.rendered }</h3>
				<p className = "cherry-post__content" dangerouslySetInnerHTML={{ __html: postData.trimed_content }}></p>
				<a className = "cherry-post__permalink" href={ postData.link }>More</a>
			</div>
		);
	}
}

export default connect(
	state => ( {
		termList: state.termList
	} ),
)( Post );
