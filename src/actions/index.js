export const updatePostListAction = ( postList ) => ( { type: 'UPDATE_POST_LIST', postList } );

export const updateTermListAction = ( termList ) => ( { type: 'UPDATE_TERM_LIST', termList } );

export const changePageAction = ( page ) => ( { type: 'UPDATE_PAGE', page } );

export const incrementPageAction = ( amount ) => ( { type: 'INCREMENT_PAGE', amount } );

export const decrementPageAction = ( amount ) => ( { type: 'DECREMENT_PAGE', amount } );

export const changeLayoutAction = ( layout ) => ( { type: 'UPDATE_LAYOUT', layout } );

export const changePostPerPageAction = ( amount ) => ( { type: 'UPDATE_POST_PER_PAGE', amount } );

export const changeFeatureImageAction = ( imageType ) => ( { type: 'UPDATE_FEATURE_IMAGE_TYPE', imageType } );
