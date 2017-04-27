import React, { Component, PropTypes } from 'react';
import WpData from '../data/WpData';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class Post extends Component {

	render() {
		const { postData, saveTitleHandler } = this.props;
		return(
			<CSSTransitionGroup
				transitionName="example"
				transitionAppear={true}
				transitionAppearTimeout={500}
				transitionEnterTimeout={500}
				transitionLeaveTimeout={300}>
					<div className="inner-wrapper">
						<figure className="thumbnail">
							<img alt={ postData.title.rendered } src={ postData.featured_image_src }/>
						</figure>
						{/*<h3 contentEditable="true" onBlur={ ( event ) => saveTitleHandler( postData.id, event ) }>{ postData.title.rendered }</h3>*/}
						<h3 onBlur={ ( event ) => saveTitleHandler( postData.id, event ) }>{ postData.title.rendered }</h3>
						<p>{ postData.content.rendered }</p>
						<a href={ postData.link } className="post-permalink">More</a>
					</div>
			</CSSTransitionGroup>
		);
	}

}
