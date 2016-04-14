 /* Specify URL of My Badges */
 /* Modify to the Moodle directory you intalled.※Be sure to end with "/" */
var moodleroot = '/';

(function( window, document ){
	var /* デザインをシンプル化する場合は、true にします*/
		ALLWAYS_SIMPLE       = false,
		
		/* &chiloflag= 0, 1( シンプル表示 ), 2( シンプル表示解除 ) */
		FLAG_NAME            = 'chiloflag',
		
		FLAG_SIMPLE          = 1,	
		
		FLAG_DISABLE_SIMPLE  = 2,	
		
		/* window.name に書き込んで style 加工をするか？を識別するための文字列 */
		WINDOW_NAME_MSG      = 'chiloflag=',
		
		/* style 加工をする場合に、ルート付近の要素に追加するクラス名 */
		SUPPLEMENT_CLASSNAME = 'simple-view',
		
		/* style 加工をする場合に、追加する要素のID、今回は body > div#page が適当 */
		/* この他に header タグにも、、、 */
		ADD_CLASSNAME_TARGET = 'page',
		
		chiloFlag            = -1,  
		loc                  = location.search.split( '?' ),
		params, i, param;

	if( 1 < loc.length ){
		params = loc[ 1 ].split( '&' );
		i      = params.length;
	
		for( ; i; ){
			param = params[ --i ].split( '=' );
			if( param[ 0 ] === FLAG_NAME ){
				chiloFlag = parseFloat( param[ 1 ] ) || 0;
				break;
			};
		};
	};

	// リダイレクト時に cgi によって埋め込まれる値
	if( typeof window[ 'redirectedForChilo' ] === 'number' ){
		chiloFlag = window[ 'redirectedForChilo' ] || 0;
	};

	/* flag が true の場合、window.name に文字列を書き込む */
	if( 0 < chiloFlag ){
		window.name = WINDOW_NAME_MSG + chiloFlag;
	} else
	if( chiloFlag === 0 ){
		window.name = '';
		if( !ALLWAYS_SIMPLE ) return;
	} else
	/* ibooks に戻るボタンを追加するか? */
	if( window.name.indexOf( WINDOW_NAME_MSG ) !== -1 ){
		chiloFlag = parseFloat( window.name.split( WINDOW_NAME_MSG )[ 1 ] ) || 0;
	} else
	/* window.opener に 文字列がある場合、window.name に文字列を書き込む */
	if( window.opener && window.opener.name.indexOf( WINDOW_NAME_MSG ) !== -1 ){
		window.name = window.opener.name;
		chiloFlag = parseFloat( window.opener.name.split( WINDOW_NAME_MSG )[ 1 ] ) || 0;
	} else {
		window.name = '';
		// chiloFlag === -1
		if( !ALLWAYS_SIMPLE ) return;
	};
	
	document.write( '<style>html,body{margin:0;border:0;}</style>' );
	
/*
 * この script は <head> 内に配置されているため、このタイミングでは、body の下の div#page は生成されていません。
 * そこでタイマーで監視して、div#page を確認後に class を追加します。
 */
window.setTimeout(
	function(){
		var elm = document.getElementById( ADD_CLASSNAME_TARGET ),
			header, div;

		if( !elm ){
			window.setTimeout( arguments.callee, 0 );
			return;
		};
		
		if( !( chiloFlag & FLAG_DISABLE_SIMPLE ) ){
			elm.className += ' ' + SUPPLEMENT_CLASSNAME;
		};
		
		header = document.getElementsByTagName( 'header' );
		if( header = header[ 0 ] ){
			if( !( chiloFlag & FLAG_DISABLE_SIMPLE ) ){
				header.className += ' ' + SUPPLEMENT_CLASSNAME;

				/* mybadges */

				elm1 = document.createElement( 'a' );
				div = header.children[ 0 ].children[ 0 ];
				div.insertBefore( elm1, div.children[ 0 ] );
				
				elm1.href      = moodleroot + 'badges/mybadges.php';
				elm1.innerHTML = 'My Badges';
				elm1.id        = 'go-to-badge';

			};
			
		};
	}, 0
);


if( chiloFlag & FLAG_DISABLE_SIMPLE ) return;

window.onload = function(){
	var path = location.path || location.pathname,
		page = document.getElementById( ADD_CLASSNAME_TARGET ),
		links, link, i, l, elm, html = '';
	
	window.onload = null;
	
	switch( path ){
		/* コース入口ページに、コースを登録、コースを解除 のリンクを追加 */
		case '/course/view.php' :
			links = document.getElementsByTagName( 'a' );
			for( i = 0, l = links.length; i < l; ++i ){
				link = links[ i ];
				if( link.href.indexOf( '/enrol/index.php?' ) !== -1 || link.href.indexOf( '/enrol/self/unenrolself.php?' ) !== -1 ){
					page.appendChild( elm = document.createElement( 'div' ) );
					elm.innerHTML = link.parentNode.innerHTML;				
					break;
				};
			};
			break;
		
		/* プロフィール ページに対して プロフィール編集、パスワード変更 リンクを追加 */
		case '/user/profile.php' :
			links = document.getElementsByTagName( 'a' );
			page.appendChild( elm = document.createElement( 'div' ) );
			
			for( i = 0, l = links.length; i < l; ++i ){
				link = links[ i ];
				if( link.href.indexOf( '/user/edit.php?' ) !== -1 ||
					link.href.indexOf( '/user/editadvanced.php?' ) !== -1 ||
					link.href.indexOf( '/login/change_password.php?' ) !== -1 ){
					html += link.parentNode.innerHTML;
				};
			};

			if( html ) elm.innerHTML = html;
			break;
	};
};

})( window, document );