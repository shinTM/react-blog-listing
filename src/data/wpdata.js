import Settings from '../data/Settings';

export default class WpData {

	static allPosts = [];

	static getXHR = null;

	static postXHR = null;

	static tempDelay = 0;

	static defaultsQueryParams = {
		page: 1,
		postPerPage: Settings.defaultSettings.postPerPage,
		categories: [],
		tags: [],
	};

	static getAllPosts() {
		let url = `${ Settings.siteUrl }/wp-json/wp/v2/posts?per_page=${ Settings.defaultSettings.postAmount }`;

		return this.httpGetRequest( url );
	}

	static getAllCategory() {
		let url = `${ Settings.siteUrl }/wp-json/wp/v2/categories`;

		return this.httpGetRequest( url );
	}

	static getPosts( queryParams = {} ) {
		this.getXHR.abort();

		let mergedQueryParams = Object.assign( WpData.defaultsQueryParams, queryParams );

		let url = `${ Settings.siteUrl }/wp-json/wp/v2/posts?per_page=${ mergedQueryParams.postPerPage }&page=${ mergedQueryParams.page }${ WpData.generateCategorySubUrl( mergedQueryParams.categories ) }`;

		return this.httpGetRequest( url );
	}

	static generateCategorySubUrl( categories = [] ) {
		let argument = '';

		if ( 0 !== categories.length ) {
			argument = `&categories=${ categories.join( ',' ) }`;
		}

		return argument;
	}

	static setTitleData( id, title ) {
		let url = `${ Settings.siteUrl }/wp-json/wp/v2/posts/${ id }?title=${ title }`;

		this.httpPostRequest( url );
	}

	static setPostExceptData( id, excerpt ) {
		let url = `${ Settings.siteUrl }/wp-json/wp/v2/posts/${ id }?excerpt=${ excerpt }`;

		this.httpPostRequest( url );
	}

	static httpPostRequest( url ) {
		WpData.postXHR = new XMLHttpRequest();
		WpData.postXHR.open( 'POST', url, true );

		let authorizationData = this.base64_encode( `${ Settings.defaultSettings.authorizationData.login }:${ Settings.defaultSettings.authorizationData.pass }` );

		WpData.postXHR.setRequestHeader( 'Authorization', 'Basic ' + authorizationData );

		WpData.postXHR.onload = function() {
			if (this.status == 200) {
				console.log('updated');
			} else {
				var error = new Error(this.statusText);

				error.code = this.status;
			}
		};

		WpData.postXHR.onerror = function() {
			new Error( 'Network Error' )
		};

		WpData.postXHR.send();
	}

	static httpGetRequest( url ) {

		return new Promise( function( resolve, reject ) {

			WpData.getXHR = new XMLHttpRequest();
			WpData.getXHR.open( 'GET', url, true );

			WpData.getXHR.onload = function() {
				if (this.status == 200) {
					resolve(this.response);


				} else {
					var error = new Error(this.statusText);

					error.code = this.status;
					reject(error);
				}
			};

			WpData.getXHR.onerror = function() {
				reject( new Error( 'Network Error' ) );
			};

			WpData.getXHR.send();
		} );

	}

	static base64_encode( data ) {

		var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		var o1, o2, o3, h1, h2, h3, h4, bits, i=0, enc='';

		do {
			o1 = data.charCodeAt(i++);
			o2 = data.charCodeAt(i++);
			o3 = data.charCodeAt(i++);

			bits = o1<<16 | o2<<8 | o3;

			h1 = bits>>18 & 0x3f;
			h2 = bits>>12 & 0x3f;
			h3 = bits>>6 & 0x3f;
			h4 = bits & 0x3f;

			enc += b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
		} while (i < data.length);

		switch( data.length % 3 ){
			case 1:
				enc = enc.slice(0, -2) + '==';
			break;
			case 2:
				enc = enc.slice(0, -1) + '=';
			break;
		}

		return enc;
	}

}
