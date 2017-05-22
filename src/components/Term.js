import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

export default class Term extends Component{
	state = {
		isActive: false
	};

	onTermClick = ( event ) => {
		this.props.onTermClick( this.props.termId );

		this.setState( {
			isActive: ! this.state.isActive
		} );
	}

	render() {
		return(
			<span className = { this.state.isActive ? 'active' : null } onClick={ this.onTermClick }>
				{ this.props.termName }
				<FontAwesome tag = 'i' name = { this.state.isActive ? 'check-circle-o' : 'circle-o' } />
			</span>
		);
	}
}
