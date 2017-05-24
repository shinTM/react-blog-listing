import React, { Component, PropTypes } from 'react';
import FontAwesome from 'react-fontawesome';

import Settings from '../data/Settings';

export default class LayoutTypeFilter extends Component {

	layoutsList() {
		const { isLoaded, layout, onLayoutUpdate } = this.props;

		if ( ! isLoaded ) {
			return false;
		}

		return (
			<div className = "inner">
				{
					Settings.listingLayoutsSettings.map( ( layoutItem, index ) => {
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
			<div className = "cherry-post-filters__layout-type">
				{ this.layoutsList() }
			</div>
		);
	}
}


