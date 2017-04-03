export default class WpData {

	static getAllPosts() {
		let url = `${ WpData.siteUrl }/wp-json/wp/v2/posts`;

		return this.httpGetRequest( url );
	}

	static getAllCategory() {
		let url = `${ WpData.siteUrl }/wp-json/wp/v2/categories`;

		return this.httpGetRequest( url );
	}

	static httpGetRequest( url ) {

		return new Promise( function( resolve, reject ) {

			var xhr = new XMLHttpRequest();
			xhr.open( 'GET', url, true );

			xhr.onload = function() {
				if (this.status == 200) {
					resolve(this.response);
				} else {
					var error = new Error(this.statusText);

					error.code = this.status;
					reject(error);
				}
			};

			xhr.onerror = function() {
				reject( new Error( 'Network Error' ) );
			};

			xhr.send();
		} );

	}
}

WpData.siteUrl = 'http://localhost:8888/cherry5-dev';
