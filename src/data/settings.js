export default class Settings {

	static siteUrl = Settings.getOption( 'siteUrl', 'http://192.168.9.83/cherry5-develop/' );
	//static siteUrl = 'http://localhost:8888/cherry5-dev/';

	static defaultSettings = {
		listingLayout: Settings.getOption( 'listingLayout', 'grid' ),
		postPerPage:   Settings.getOption( 'postPerPage', 6 ),
		responsiveColumns: Settings.getOption( 'responsiveColumns', {
			'col-xl': 3,
			'col-lg': 3,
			'col-md': 3,
			'col-sm': 2,
			'col-xs': 1
		} ),
		viewNextType:   Settings.getOption( 'viewNextType', 'more-button' ), //pagination, more-button
		viewMoreNumber: Settings.getOption( 'viewMoreNumber', 3 ),
		imageType:      'cover', //tag, cover
		customizerMode: Settings.getOption( 'customizerMode', true ),
		authorizationData: {
			login: 'admin',
			pass: '1'
		}
	}

	static listingLayoutsSettings = [
		{
			'name': 'grid',
			'icon': 'th'
		},
		{
			'name': 'list',
			'icon': 'align-justify'
		},
		{
			'name': 'columns',
			'icon': 'columns'
		},
		{
			'name': 'timeline',
			'icon': 'calendar-o'
		}
	]

	static getOption( optionName = '', defaultValue = false ) {

		if ( window && window.cherryReactBlog ) {

			return window.cherryReactBlog.optionName || defaultValue;
		}

		return defaultValue;
	}

}
