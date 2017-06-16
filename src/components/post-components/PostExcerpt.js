import React, { Component, PropTypes } from 'react';
import MdEdit from 'react-icons/md/edit';
import MdSave from 'react-icons/md/save';
import MdAutorenew from 'react-icons/md/autorenew';
import $ from 'jquery';

import WpData from '../../data/WpData';
import Settings from '../../data/Settings';

export default class PostExcerpt extends Component {

	state = {
		customizerMode: 'edit'
	};

	onEditClick( id, event ) {
		let $target        = $( event.currentTarget ),
			$excerpt       = $target.siblings( '.trimed-excerpt' ),
			excerptContent = $excerpt.html();

		this.setState({
			customizerMode: 'edit' == this.state.customizerMode ? 'save' : 'edit'
		});

		if ( 'edit' == this.state.customizerMode  ) {
			$excerpt.focus();
		} else {
			$excerpt.blur();
			this.setState({
				customizerMode: 'loading'
			});

			WpData.setPostExceptData( id, excerptContent ).then(
				response => {
					this.setState({
						customizerMode: 'edit'
					});
				}
			);
		}
	}

	render() {
		let { id, excerpt } = this.props;
		let excerptContent = '';
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
				content = <span className = "trimed-excerpt" tabIndex = "0" dangerouslySetInnerHTML = {{ __html: excerpt }}></span>;;
				break;
			case 'save':
				content = <span className = "trimed-excerpt" tabIndex = "0" contentEditable dangerouslySetInnerHTML = {{ __html: excerpt }}></span>
				break;
		}

		if ( ! Settings.defaultSettings.customizerMode ) {
			excerptContent = <span className = "trimed-excerpt" dangerouslySetInnerHTML = {{ __html: excerpt }}></span>;
		} else {
			excerptContent = <span>
				{ content }
				<span className = "edit-button" onClick = { ( event ) => this.onEditClick( id, event ) } >
					{ icon }
				</span>
			</span>;
		}

		let classes = [ 'cherry-post__trimed-excerpt' ];
		return(
			<p className = { classes.join( ' ' ) }>{ excerptContent }</p>
		);
	}
}
