import React, { Component, PropTypes } from 'react';
import TermList from '../TermList/TermList';

export default class ViewPort extends Component{
	state = {
		titleName: 'Our categories',
	};

	render() {
		return(
			<div>
				<h2>{ this.state.titleName }</h2>
				<TermList/>
			</div>
		);
	}

}
