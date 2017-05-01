export default class WpData {
	static siteUrl = 'http://localhost:8888/cherry5-dev/';

	static allPosts = [];

	static getAllPosts() {
		let url = `${ WpData.siteUrl }/wp-json/wp/v2/posts?per_page=100`;

		return this.httpGetRequest( url );
	}

	static getAllCategory() {
		let url = `${ WpData.siteUrl }/wp-json/wp/v2/categories`;

		return this.httpGetRequest( url );
	}

	static setTitleData( id, title ) {
		let url = `${ WpData.siteUrl }/wp-json/wp/v2/posts/${ id }?title=${ title }`;

		this.httpPostRequest( url );
	}

	static httpPostRequest( url ) {
		var xhr = new XMLHttpRequest();
		xhr.open( 'POST', url, true );

		let authorizationData = this.base64_encode( 'admin:1' );

		xhr.setRequestHeader( 'Authorization', 'Basic ' + authorizationData );

		xhr.onload = function() {
			if (this.status == 200) {
				console.log('updated');
			} else {
				var error = new Error(this.statusText);

				error.code = this.status;
			}
		};

		xhr.onerror = function() {
			new Error( 'Network Error' )
		};

		xhr.send();
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
