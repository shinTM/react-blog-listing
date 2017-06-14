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
		let classes = [ 'inner' ];

		if ( this.state.isActive ) {
			classes.push( 'active' );
		}

		return(
			<div className = { classes.join( ' ' ) } onClick = { this.onTermClick }>
				{ this.state.isActive ? <MdCheck size = { 20 } /> : null }
				<span>
					{ this.props.termName }
				</span>
			</div>
		);
	}
}
