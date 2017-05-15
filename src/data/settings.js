export default class Settings {

	static defaultSettings = {
		'listingLayout': 'grid',
		'postPerPage':   6,
		'columns':       4
	}

	static listingLayoutsSettings = [
		{
			'name': 'grid',
			'icon': 'th'
		},
		{
			'name': 'columns',
			'icon': 'columns'
		},
		{
			'name': 'timeline',
			'icon': 'calendar-o'
		},
		{
			'name': 'list',
			'icon': 'align-justify'
		}
	]
}
