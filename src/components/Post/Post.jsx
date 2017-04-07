import React, { Component, PropTypes } from 'react';
import WpData from '../../data/WpData';

export default class Post extends Component {

	render() {
		const { postData, saveTitleHandler } = this.props;

		return(
			<div className="inner-wrapper">
				<figure>
					<img alt={ postData.title.rendered } src={ postData.featured_image_src }/>
				</figure>
				<h3 contentEditable="true" onBlur={ ( event ) => saveTitleHandler( postData.id, event ) }>{ postData.title.rendered }</h3>
				<p>{ postData.content.rendered }</p>
			</div>
		);
	}

}
