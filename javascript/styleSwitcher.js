 /* Specify URL of My Badges */
 /* Modify to the Moodle directory you intalled.��Be sure to end with "/" */
var moodleroot = '/';

(function( window, document ){
	var /* �f�U�C�����V���v��������ꍇ�́Atrue �ɂ��܂�*/
		ALLWAYS_SIMPLE       = false,
		
		/* &chiloflag= 0, 1( �V���v���\�� ), 2( �V���v���\������ ) */
		FLAG_NAME            = 'chiloflag',
		
		FLAG_SIMPLE          = 1,	
		
		FLAG_DISABLE_SIMPLE  = 2,	
		
		/* window.name �ɏ�������� style ���H�����邩�H�����ʂ��邽�߂̕����� */
		WINDOW_NAME_MSG      = 'chiloflag=',
		
		/* style ���H������ꍇ�ɁA���[�g�t�߂̗v�f�ɒǉ�����N���X�� */
		SUPPLEMENT_CLASSNAME = 'simple-view',
		
		/* style ���H������ꍇ�ɁA�ǉ�����v�f��ID�A����� body > div#page ���K�� */
		/* ���̑��� header �^�O�ɂ��A�A�A */
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

	// ���_�C���N�g���� cgi �ɂ���Ė��ߍ��܂��l
	if( typeof window[ 'redirectedForChilo' ] === 'number' ){
		chiloFlag = window[ 'redirectedForChilo' ] || 0;
	};

	/* flag �� true �̏ꍇ�Awindow.name �ɕ�������������� */
	if( 0 < chiloFlag ){
		window.name = WINDOW_NAME_MSG + chiloFlag;
	} else
	if( chiloFlag === 0 ){
		window.name = '';
		if( !ALLWAYS_SIMPLE ) return;
	} else
	/* ibooks �ɖ߂�{�^����ǉ����邩? */
	if( window.name.indexOf( WINDOW_NAME_MSG ) !== -1 ){
		chiloFlag = parseFloat( window.name.split( WINDOW_NAME_MSG )[ 1 ] ) || 0;
	} else
	/* window.opener �� �����񂪂���ꍇ�Awindow.name �ɕ�������������� */
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
 * ���� script �� <head> ���ɔz�u����Ă��邽�߁A���̃^�C�~���O�ł́Abody �̉��� div#page �͐�������Ă��܂���B
 * �����Ń^�C�}�[�ŊĎ����āAdiv#page ���m�F��� class ��ǉ����܂��B
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
		/* �R�[�X�����y�[�W�ɁA�R�[�X��o�^�A�R�[�X������ �̃����N��ǉ� */
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
		
		/* �v���t�B�[�� �y�[�W�ɑ΂��� �v���t�B�[���ҏW�A�p�X���[�h�ύX �����N��ǉ� */
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