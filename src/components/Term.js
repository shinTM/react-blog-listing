import React, { Component, PropTypes } from 'react';
import MdCheck from 'react-icons/md/check';
import MdPanoramaFishEye from 'react-icons/md/panorama-fish-eye';

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
			<span className = { this.state.isActive ? 'active' : null } onClick = { this.onTermClick }>
				{ this.state.isActive ? <MdCheck size = { 20 } /> : null }
				{ this.props.termName }
			</span>
		);
	}
}
