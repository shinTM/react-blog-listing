import React, { Component, PropTypes } from 'react';
import WpData from '../data/WpData';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class Post extends Component {

	render() {
		const { postData, saveTitleHandler } = this.props;

		return(
			<CSSTransitionGroup
				transitionName="example"
				transitionEnterTimeout={500}
				transitionLeaveTimeout={300}>
				<div key={ postData.id } className="post">
					<div className="inner-wrapper">
						<figure className="thumbnail">
							<img alt={ postData.title.rendered } src={ postData.featured_image_src }/>
						</figure>
						<h3 contentEditable="true" onBlur={ ( event ) => saveTitleHandler( postData.id, event ) }>{ postData.title.rendered }</h3>
						<p>{ postData.content.rendered }</p>
					</div>
				</div>
			</CSSTransitionGroup>

		);
	}

}
