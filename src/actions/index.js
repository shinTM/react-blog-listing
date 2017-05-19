export const updatePostListAction = ( postList ) => ( { type: 'UPDATE_POST_LIST', postList } );

export const addMorePostsAction = ( postList ) => ( { type: 'ADD_MORE_POSTS', postList } );

export const updateTermListAction = ( termList ) => ( { type: 'UPDATE_TERM_LIST', termList } );

export const changePageAction = ( page ) => ( { type: 'UPDATE_PAGE', page } );

export const incrementPageAction = ( amount ) => ( { type: 'INCREMENT_PAGE', amount } );

export const decrementPageAction = ( amount ) => ( { type: 'DECREMENT_PAGE', amount } );

export const changeLayoutAction = ( layout ) => ( { type: 'UPDATE_LAYOUT', layout } );
