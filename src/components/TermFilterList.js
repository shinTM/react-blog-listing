import React, { Component, PropTypes } from 'react';
import Term from './Term.js';
import { connect } from 'react-redux';

import WpData from '../data/WpData';
import Settings from '../data/Settings';

import {
	changePageAction,
	updatePostListAction,
	loaderVisibleAction,
	updatePageNumberAction,
	setPostPerPageAction
} from '../actions';

class TermFilterList extends Component {

	activeTermsList = [];

	renderTermList() {
		const { isLoaded, termList } = this.props;

		if ( ! isLoaded ) {
			return false;
		}

		if ( ! termList || ! termList.length ) {
			return false;
		}

		return(
			<ul>
				{
				termList.map( ( term, index ) => {
					return(
						<li key = { term.id }>
							<Term termId = { term.id } termName = { term.name } onTermClick = { this.onTermClick( term.id ) }/>
						</li>
					);
				})
				}
			</ul>
		);
	}

	onTermClick = ( termId ) => ( event ) => {
		if ( ! this.activeTermsList.includes( termId ) ) {
			this.activeTermsList.push( termId );
		} else {
			this.activeTermsList = this.activeTermsList.filter( value => value !== termId );
		}

		this.props.onLoaderVisibleUpdate( true );
		this.props.onPostPerPageUpdate( Settings.defaultSettings.postPerPage );

		WpData.queryParams.page = 1;
		WpData.queryParams.postPerPage = Settings.defaultSettings.postPerPage;
		WpData.queryParams.categories = this.activeTermsList;

		WpData.getPosts().then(
			response => {
				let postsData = JSON.parse( response.data );

				this.props.onLoaderVisibleUpdate( false );
				this.props.onPageNumberUpdate( response.totalPagesAmount );
				this.props.onUpdatePostList( postsData );
			},
			error => {
				alert( `Rejected: ${error}` );
			}
		);
	};

	render() {
		return(
			<div className="cherry-post-filters__term-list">
				{ this.renderTermList() }
			</div>
		);
	}
}

export default connect(
	state    => ( {
		postList: state.postList,
		page: state.page,
	} ),
	dispatch => ( {
		onUpdatePostList: ( postList ) => {
			dispatch( updatePostListAction( postList ) );
			dispatch( changePageAction( 1 ) );
		},

		onPageUpdate: ( page ) => {
			dispatch( changePageAction( page ) );
		},

		onPageNumberUpdate: ( number ) => {
			dispatch( updatePageNumberAction( number ) );
		},

		onPostPerPageUpdate: ( number ) => {
			dispatch( setPostPerPageAction( number ) );
		},

		onLoaderVisibleUpdate: ( visible ) => {
			dispatch( loaderVisibleAction( visible ) );
		}
	} )
)( TermFilterList );

