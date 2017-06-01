export default class Settings {
	static siteUrl = 'http://192.168.9.83/cherry5-develop/';
	//static siteUrl = 'http://localhost:8888/cherry5-dev/';

	static defaultSettings = {
		postAmount:    100,
		listingLayout: 'grid',
		postPerPage:   6,
		columns: 3,
		responsiveColumns: {
			'col-xl': 3,
			'col-lg': 3,
			'col-md': 3,
			'col-sm': 2,
			'col-xs': 1
		},
		viewNextType: 'more-button', //pagination, more-button
		viewMoreAmount: 3,
		imageType: 'cover', //tag, cover
		customizerMode: false
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
}
