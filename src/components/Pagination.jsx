import React, { Component, PropTypes } from 'react';

export default class Pagination extends Component{
	render() {
		const { paginations, postPerPage, onClick, handlePageNumber } = this.props;

		if ( null === paginations ) {
			return <h4>Loading pagination...</h4>;
		}

		const pagItems = paginations.map( ( pagination, i ) => {

			if ( i === handlePageNumber - 1 ) {
				return(
					<li key={ i } className="active"><a href="#" onClick={ onClick( i ) }>{ i + 1 }</a></li>
				);
			}

			return(
				<li key={ i }><a href="#" onClick={ onClick( i ) }>{ i + 1 }</a></li>
			);
		} );

		pagItems.length = Math.ceil( pagItems.length / postPerPage );

		return(
			<ul className="post-pagination">
				{ pagItems }
			</ul>
		);
	}
}
