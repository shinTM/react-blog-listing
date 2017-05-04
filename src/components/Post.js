import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import PostTermList from './post-components/PostTermList.js';

import WpData from '../data/WpData';

class Post extends Component {

	render() {
		const { postData, saveTitleHandler } = this.props;
		return(
			<div className="inner-wrapper">
				<figure className = "cherry-post__thumbnail">
					<img alt = { postData.title.rendered } src = { postData.featured_image_src }/>
				</figure>
				<PostTermList termList = { this.props.termList } postTerms = { postData.categories } />
				{/*<h3 contentEditable="true" onBlur={ ( event ) => saveTitleHandler( postData.id, event ) }>{ postData.title.rendered }</h3>*/}
				<h3  className = "cherry-post__title" onBlur={ ( event ) => saveTitleHandler( postData.id, event ) }>{ postData.title.rendered }</h3>
				<p className = "cherry-post__content" dangerouslySetInnerHTML={{ __html: postData.content.rendered }}></p>
				<a className = "cherry-post__permalink" href={ postData.link } className="post-permalink">More</a>
			</div>
		);
	}
}

export default connect(
	state => ( {
		termList: state.termList
	} ),
)( Post );
