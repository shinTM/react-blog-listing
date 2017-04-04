import React, { Component, PropTypes } from 'react';
import WpData from '../../data/WpData';

export default class Post extends Component {

	saveTitle( event) {
		console.log(event);
		WpData.setTitleData('s');
	}

	render() {
		let postData = this.props.postData;

		return(
			<div className="inner-wrapper">
				<figure>
					<img alt={ postData.title.rendered } src={ postData.featured_image_src }/>
				</figure>
				<h3 contentEditable="true" onBlur={this.saveTitle}>{ postData.title.rendered }</h3>
				<p>{ postData.content.rendered }</p>
			</div>
		);
	}
}
