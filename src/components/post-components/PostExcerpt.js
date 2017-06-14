import React, { Component, PropTypes } from 'react';
import MdEdit from 'react-icons/md/edit';
import MdSave from 'react-icons/md/save';
import $ from 'jquery';

import WpData from '../../data/WpData';
import Settings from '../../data/Settings';

export default class PostExcerpt extends Component {

	state = {
		customizerMode: false
	};

	onEditClick( id, event ) {
		let $target        = $( event.currentTarget ),
			$excerpt       = $target.siblings( '.trimed-excerpt' ),
			excerptContent = $excerpt.html();

		this.setState({
			customizerMode: ! this.state.customizerMode
		});

		if ( ! this.state.customizerMode ) {
			$excerpt.focus();
		} else {
			$excerpt.blur();
			WpData.setPostExceptData( id, excerptContent );
		}
	}

	render() {
		let { id, excerpt } = this.props;
		let excerptContent = '';

		if ( ! Settings.defaultSettings.customizerMode ) {
			excerptContent = <span className = "trimed-excerpt" dangerouslySetInnerHTML = {{ __html: postData.trimed_content }}></span>;
		} else {
			excerptContent = <span>
				{ this.state.customizerMode ?
					<span className = "trimed-excerpt" tabIndex = "0" contentEditable dangerouslySetInnerHTML = {{ __html: excerpt }}></span>
					:
					<span className = "trimed-excerpt" tabIndex = "0" dangerouslySetInnerHTML = {{ __html: excerpt }}></span>
				}
				<span className = "edit-button" onClick = { ( event ) => this.onEditClick( id, event ) } >
					{ ! this.state.customizerMode ? <MdEdit size = { 18 }/> : <MdSave size = { 18 }/> }
				</span>
			</span>;
		}

		let classes = [ 'cherry-post__trimed-excerpt' ];
		return(
			<p className = { classes.join( ' ' ) }>{ excerptContent }</p>
		);
	}
}
