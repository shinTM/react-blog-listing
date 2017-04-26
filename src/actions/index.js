export const incrementAction = ( amount ) => ( { type: 'INCREMENT', amount } );
export const decrementAction = ( amount ) => ( { type: 'DECREMENT', amount } );

export const changePageAction = ( page ) => ( { type: 'CHANGE_PAGE', page } );

export const updatePostListAction = ( postList ) => ( { type: 'UPDATE_POST_LIST', postList } );
