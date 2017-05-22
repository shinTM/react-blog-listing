export default class Settings {

	static defaultSettings = {
		listingLayout: 'grid',
		postPerPage:   8,
		columns: {
			'columns_desktop':         4,
			'columns_laptop':          4,
			'columns_album_tablet':    3,
			'columns_portrait_tablet': 2,
			'columns_mobile':          1
		},
		viewNextType: 'pagination',
		viewMoreAmount: 4
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
