import React, { Component, PropTypes } from 'react';

export default class Pagination extends Component{
	render() {
		const { postList, postPerPage, pageNumber, onClick } = this.props;

		if ( ! postList || ! postList.length ) {
			return <h4>Loading pagination...</h4>;
		}

		const pagItems = postList.map( ( pagination, i ) => {
			return(
				<li key={ i }>
					<button className={ i === pageNumber - 1 ? 'active' : '' } onClick={ onClick( i ) }>{ i + 1 }</button>
				</li>
			);
		} );

		pagItems.length = Math.ceil( pagItems.length / postPerPage );

		return(
			<ul className="cherry-post-list-pagination">
				{ pagItems }
			</ul>
		);
	}
}
