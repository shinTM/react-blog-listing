import React, { Component, PropTypes } from 'react';
import MdEdit from 'react-icons/md/edit';
import MdSave from 'react-icons/md/save';
import $ from 'jquery';

import WpData from '../../data/WpData';
import Settings from '../../data/Settings';

export default class PostTitle extends Component {

	state = {
		customizerMode: false
	};

	onEditClick( id, event ) {
		let $targer      = $( event.currentTarget ),
			$title       = $targer.siblings( '.title' ),
			titleContent = $title.html();

		this.setState({
			customizerMode: ! this.state.customizerMode
		});

		if ( ! this.state.customizerMode ) {
			$title.focus();
		} else {
			WpData.setTitleData( id, titleContent );
		}
	}

	render() {
		let { id, title, link } = this.props;
		let titleContent = '';

		if ( ! Settings.defaultSettings.customizerMode ) {
			titleContent = <a href = { link }>{ title }</a>
		} else {
			titleContent = <div>
				{ this.state.customizerMode ? <span className = "title" tabIndex = "0" contentEditable>{ title }</span> : <span className = "title">{ title }</span> }
				<span className = "edit-button" onClick = { ( event ) => this.onEditClick( id, event ) } >
					{ ! this.state.customizerMode ? <MdEdit size = { 18 }/> : <MdSave size = { 18 }/> }
				</span>
			</div>
		}

		let classes = [ 'cherry-post__title' ];

		return(
			<h2 className = { classes.join( ' ' ) }>{ titleContent }</h2>
		);
	}
}
