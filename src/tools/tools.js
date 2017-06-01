import Settings from '../data/Settings';

export default class Tools {
	static generateGridItemColumnClasses() {
		let responsiveColumns = Settings.defaultSettings.responsiveColumns,
			columnClasses = [];

		for ( let key in responsiveColumns ) {
			let columnClass = `${ key }-${ 12 / responsiveColumns[ key ] }`;
			columnClasses.push( columnClass );
		}

		return columnClasses;
	}
}
