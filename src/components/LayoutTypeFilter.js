import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

import Settings from '../data/Settings';

export default class LayoutTypeFilter extends Component {

	layoutsList() {
		const { layout, onLayoutUpdate } = this.props;

		return (
			<div className = "inner">
				{
					Settings.listingLayoutsSettings.map( ( layoutItem, index ) => {
						console.log(layout);
						console.log(layout.name);
						let itemClasses = `layout-type-item layout-type-item--${ layoutItem.name } ${ layout == layoutItem.name ? ' active' : '' }`;

						return (
							<span key = { index } className = { itemClasses } onClick = { ( event ) => onLayoutUpdate( layoutItem.name ) } >
								<FontAwesome tag = 'i' name = { layoutItem.icon } />
							</span>
						);
					} )
				}
			</div>
		);

	}

	render() {
		return(
			<div className = "cherry-post-controls__layout-type">
				{ this.layoutsList() }
			</div>
		);
	}
}


