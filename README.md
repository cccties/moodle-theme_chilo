English version is [HERE](#top_e).

# <a name="top">The "Chilo" Moodle Theme</a>

・Moodleのメニューやリンクを最小限にし、CHiLO Bookからリンクして利用するのに適したレイアウトに変更するテーマです。

・このテーマは、[_CHiLO_](http://www.cccties.org/activities/chilo/)Ⓡ の一部として提供されています。

・このテーマは、Moodle3.0 Clean themeをカスタマイズして作成されています。

* [推奨環境](#no_1)
* [インストール](#no_2)
* [パラメータと引数](#no_3)
* [テーマの標準設定](#no_4)
* [課題・質問](#no_5)
* [Licensing](#no_6)

## <a name="no_1">推奨環境</a> 

・ Moodle 3.0以上  
・ UNIX 系 OS

CHiLO用Moodle設定

[top↑](#top)

## <a name="no_2">テーマのインストール</a>

1. Moodle をインストールします。
2. GitHubから Chiloテーマ( https://github.com/cccties/moodle-theme_chilo/archive/master.zip
)をダウンロードし展開します。
3. 展開後、ディレクトリ名を _chilo_ に変更し、Moodleをインストールしたサーバーの _moodle/theme/_ に配置します。
4. Moodleの管理者用メニューの「サイト管理 > 通知」でChiloテーマを設定してください。

[top↑](#top)

## <a name="no_4">テーマのデフォルト設定</a>

_theme/chilo/javascript/styleSwitcher.js_ の _ALLWAYS SIMPLE_ で、テーマのデフォルトレイアウトを定義します。

ALLWAYS_SIMPLE = false,　ディフォルトのレイアウトはMoodleの標準レイアウトとする
ALLWAYS_SIMPLE = true,　ディフォルトのレイアウトはChiloテーマのレイアウトとする

```javascript
(function( window, document ){
var /* 初期値はfalseとなっています*/
ALLWAYS_SIMPLE = false,
```
[top↑](#top)




## <a name="no_3">パラメータと引数</a>

moodleのURL に、_chiloflag_ パラメータを設定することでレイアウトを適用できます（GET メソッド）。  

表1 chiloflag パラメータ

|ビット|内容|
|---|---|
|0|ALLWAYS_SIMPLEで設定したディフォルトレイアウトにする|
|1|CHiLOテーマのレイアウトにする|
|2|Moodleの標準テーマのレイアウトにする|

以下に指定例を示します。

* CHiLOテーマのレイアウトにする
http://example.net/course/view.php?id=2&chiloflag=2

[top↑](#top)



## <a name="no_5">課題・質問</a>

このソフトの課題、質問、及び要望はこちらにご記載ください。
-> [Issues](https://github.com/cccties/moodle-theme_chilo/issues)

[top↑](#top)

## <a name="no_6">Licensing</a>

The CHiLO theme is 'free' software under the terms of the GNU GPLv3 License. (see [LICENSE.txt](LICENSE.txt)) 


***
日本語版は[こちら](#top).

# <a name="top_e">The "Chilo" Moodle Theme</a>

In order to reduce  operational errors, hide the menues and links of Moodle which would not be used after configuring Chilo theme.

This software is provided as a part of [_CHiLO_](http://www.cccties.org/activities/chilo/)Ⓡ.

This theme is created by customizing Moodle3.0 Clean theme.

* [Recommended Environment](#no_1_e)
* [Installation](#no_2_e)
* [Parameter and argument](#no_3_e)
* [テーマの標準設定](#no_4_e)
* [Inquiries](#no_5_e)
* [Licensing](#no_6_e)
 
## <a name="no_1_e">Recommended Environment</a>

* Moodle 3.0 or higher 
* UNIX-like OS Configuration of Moodle for CHiLO 

[top↑](#top_e)

## <a name="no_2_e">Installation</a>

1. Install Moodle.
2. Download Chilo theme( https://github.com/cccties/moodle-theme_chilo/archive/master.zip )from GitHub then expand.
3. Move the expanded ディレクトリ名を _chilo_ に変更し _moodle/theme/_ of the sever where Moodle に配置します。
4. Configure the Chilo theme from the Moodle administrator menue "Site > Notice".

[top↑](#top_e)

## <a name="no_3_e">Parameter and argument</a>

In order to display the screen cusomized in chilo theme from iBooks and others, add on _chiloflag_ parameter to the URL for accessing to normal moodle site (GET method).   
The function of chiloflag parameter is shown by the bit flag (fig.1).

Fig.1 Chiloflag parameter

|Bit|Contents|
|---|---|
|0|chilo テーマの標準にする|
|1|シンプル表示にする|
|2|Cancel the simple display|

Following are the specified examples.

* シンプル表示にする  
http://example.net/course/view.php?id=2&chiloflag=1
* Cancel the simple display  
http://example.net/course/view.php?id=2&chiloflag=2
* chilo テーマの標準にする  
http://example.net/course/view.php?id=2&chiloflag=0

[top↑](#top)

## <a name="no_4_e">テーマの標準設定</a>

If you rewrite _ALWAYS SIMPLE_ of the first part of _theme/chilo/javascript/styleSwitcher.js_ to _true_, 
chilo テーマの標準をシンプル表示にすることができます。

```javascript
(function( window, document ){
var /* 常に デザインをシンプル化する場合は、true にします*/
ALLWAYS_SIMPLE = false,
```

[top↑](#top)

## <a name="no_5_e">Inquiries</a>

Enter any inquiries, opinions, or requests concernig this software.
-> [Issues](https://github.com/cccties/moodle-theme_chilo/issues)

[top↑](#top_e)

## <a name="no_6_e">Licensing</a>

The CHiLO theme is 'free' software under the terms of the GNU GPLv3 License. (see [LICENSE.txt](LICENSE.txt)) 
