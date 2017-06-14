export const updatePostListAction = ( postList ) => ( { type: 'UPDATE_POST_LIST', postList } );

export const addMorePostListAction = ( postList ) => ( { type: 'ADD_MORE_POSTS', postList } );

export const updateTermListAction = ( termList ) => ( { type: 'UPDATE_TERM_LIST', termList } );

export const changePageAction = ( page ) => ( { type: 'UPDATE_PAGE', page } );

export const changeLayoutAction = ( layout ) => ( { type: 'UPDATE_LAYOUT', layout } );

export const setPostPerPageAction = ( number ) => ( { type: 'SET_POST_PER_PAGE', number } );

export const changePostPerPageAction = ( number ) => ( { type: 'UPDATE_POST_PER_PAGE', number } );

export const changeFeatureImageAction = ( imageType ) => ( { type: 'UPDATE_FEATURE_IMAGE_TYPE', imageType } );

export const loaderVisibleAction = ( visible ) => ( { type: 'UPDATE_STATE', visible } );

export const updatePageNumberAction = ( number ) => ( { type: 'UPDATE_PAGE_NUMBER', number } );

