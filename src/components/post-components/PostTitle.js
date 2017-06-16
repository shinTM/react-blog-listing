import React, { Component, PropTypes } from 'react';
import MdEdit from 'react-icons/md/edit';
import MdSave from 'react-icons/md/save';
import MdAutorenew from 'react-icons/md/autorenew';
import $ from 'jquery';

import WpData from '../../data/WpData';
import Settings from '../../data/Settings';

export default class PostTitle extends Component {

	state = {
		customizerMode: 'edit'
	};

	onEditClick( id, event ) {
		let $targer      = $( event.currentTarget ),
			$title       = $targer.siblings( '.title' ),
			titleContent = $title.html();

		this.setState({
			customizerMode: 'edit' == this.state.customizerMode ? 'save' : 'edit'
		});

		if ( 'edit' == this.state.customizerMode ) {
			$title.focus();
		} else {
			$title.blur();
			this.setState({
				customizerMode: 'loading'
			});
			WpData.setTitleData( id, titleContent ).then(
				response => {
					this.setState({
						customizerMode: 'edit'
					});
				}
			);
		}
	}

	render() {
		let { id, title, link } = this.props;
		let titleContent = '';
		let icon = '';
		let content = '';

		switch( this.state.customizerMode ) {
			case 'edit':
				icon = <MdEdit size = { 18 }/>
				break;
			case 'save':
				icon =  <MdSave size = { 18 } />
				break;
			case 'loading':
				icon =  <MdAutorenew className = "spinner" size = { 18 } />
				break;
		}

		switch( this.state.customizerMode ) {
			case 'edit':
			case 'loading':
				content = <span className = "title" tabIndex = "0">{ title }</span>;
				break;
			case 'save':
				content = <span className = "title" tabIndex = "0" contentEditable>{ title }</span>;
				break;
		}

		if ( ! Settings.defaultSettings.customizerMode ) {
			titleContent = <a href = { link }>{ title }</a>
		} else {
			titleContent = <div>
				{ content }
				<span className = "edit-button" onClick = { ( event ) => this.onEditClick( id, event ) } >
					{ icon }
				</span>
			</div>
		}

		let classes = [ 'cherry-post__title' ];

		return(
			<h2 className = { classes.join( ' ' ) }>{ titleContent }</h2>
		);
	}
}
