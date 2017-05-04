import React, { Component, PropTypes } from 'react';
import Term from './Term.js';
import { connect } from 'react-redux';

import WpData from '../data/WpData';

import { updatePostListAction } from '../actions';
import { changePageAction } from '../actions';

class TermFilterList extends Component {

	activeTermsList = [];

	renderTermList() {
		const { termList, onClick } = this.props;

		if ( ! termList || ! termList.length ) {
			return(
				<h4>Loading Term List...</h4>
			)
		}

		return(
			<ul>
				{
				termList.map( ( term, index ) => {
					return(
						<li key={ term.id }>
							<Term termId = { term.id } termName = { term.name } onTermClick = { this.onTermClick( term.id ) }/>
						</li>
					);
				})
				}
			</ul>
		);
	}

	onTermClick = ( termId ) => ( event ) => {
		let postList = WpData.allPosts;

		if ( ! this.activeTermsList.includes( termId ) ) {
			this.activeTermsList.push( termId );
		} else {
			this.activeTermsList = this.activeTermsList.filter( value => value !== termId );
		}

		if ( this.activeTermsList.length ) {
			postList = postList.filter( ( post ) => {

				for ( let category of post.categories ) {
					if ( this.activeTermsList.includes( category ) ) {
						return true;
					}
				}
			} );

		}

		this.props.onUpdatePostList( postList );
	};

	render() {
		return(
			<div className="cherry-term-list">
				{ this.renderTermList() }
			</div>
		);
	}
}

export default connect(
	state    => ( {
		tempState: state,
		postList: state.postList
	} ),
	dispatch => ( {
		onUpdatePostList: ( postList ) => {
			dispatch( updatePostListAction( postList ) );
			dispatch( changePageAction( 1 ) );
		}
	} )
)( TermFilterList );
