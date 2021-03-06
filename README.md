English version is [HERE](#top_e).

# <a name="top">The "Chilo" Moodle Theme</a>

・Moodleのメニューやリンクを削除してCHiLO Bookに適したレイアウトにするテーマです。

・このテーマは、[_CHiLO_](http://www.cccties.org/activities/chilo/)Ⓡ の一部として提供されています。

・このテーマは、Moodle3.0 Clean themeをカスタマイズして作成されています。

* [推奨環境](#no_1)
* [テーマのインストール](#no_2)
* [テーマのデフォルト設定](#no_3)
* [パラメータと引数](#no_4)
* [課題・質問](#no_5)
* [Licensing](#no_6)

## <a name="no_1">推奨環境</a> 

・ Moodle 3.0以上  
・ UNIX 系 OS

[top↑](#top)

## <a name="no_2">テーマのインストール</a>

1. Moodle をインストールします。
2. GitHubから Chiloテーマ( https://github.com/cccties/moodle-theme_chilo/archive/master.zip
)をダウンロードし展開します。
3. 展開後、ディレクトリ名を _chilo_ に変更し、Moodleをインストールしたサーバーの _moodle/theme/_ に配置します。
4. 以下のいずれかの方法でテーマを選択してください．  
   サイトのテーマがCleanの場合：Chiloテーマをサイト全体のテーマとして設定します。  
   サイトのテーマがCleanと異なる場合：CHiLO Bookを登録するコースにのみChiloテーマを設定します．設定方法は，コースの「アピアランス > テーマを強制する」です．

[top↑](#top)

## <a name="no_3">テーマのデフォルト設定</a>

_theme/chilo/javascript/styleSwitcher.js_ の _ALLWAYS SIMPLE_ で、テーマのデフォルトレイアウトを定義します。

ALLWAYS_SIMPLE = false,　デフォルトのレイアウトはMoodleの標準レイアウトとする

ALLWAYS_SIMPLE = true,　デフォルトのレイアウトはChiloテーマのレイアウトとする

```javascript
(function( window, document ){
var /* 初期値はfalseとなっています*/
ALLWAYS_SIMPLE = false,
```
[top↑](#top)


## <a name="no_4">パラメータと引数</a>

moodleのURL に、_chiloflag_ パラメータを設定することでレイアウトを適用できます（GET メソッド）。  

表1 chiloflag パラメータ

|ビット|内容|
|---|---|
|0|ALLWAYS_SIMPLEで設定したディフォルトレイアウトにする|
|1|CHiLOテーマのレイアウトにする|
|2|Moodleの標準テーマのレイアウトにする|

以下に指定例を示します。

* CHiLOテーマのレイアウトにする
http://example.net/course/view.php?id=2&chiloflag=1

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
* [Installation of the theme](#no_2_e)
* [Default setting of the theme](#no_3_e)
* [Parameter and argument](#no_4_e)
* [Inquiries](#no_5_e)
* [Licensing](#no_6_e)
 
## <a name="no_1_e">Recommended Environment</a>

* Moodle 3.0 or higher 
* UNIX-like OS Configuration of Moodle for CHiLO 

[top↑](#top_e)

## <a name="no_2_e">Installation of the theme</a>

1. Install Moodle.
2. Download Chilo theme( https://github.com/cccties/moodle-theme_chilo/archive/master.zip )from GitHub then expand.
3. After expanding, change the directory name to _chilo_ and place it to _moodle/theme/_ of the sever where Moodle is installed
4. Select the theme from either of the following ways:  
  When the site theme is set to "Clean": set the Chilo theme as the theme for the whole site.  
  When the site theme is set to other than "Clean": set the Chilo theme only to the course you are registering as CHiLO Book.The setting is "Appearance > Force theme."

[top↑](#top_e)


## <a name="no_3_e">Default setting of the theme</a>

Difine the default layout of the theme by setting _ALLWAYS SIMPLE_ of _theme/chilo/javascript/styleSwitcher.js_ 

ALLWAYS_SIMPLE = false,　the default layout is set as Moodle standard layout

ALLWAYS_SIMPLE = true,　the default setting is set as Chilo theme layout

```javascript
(function( window, document ){
var /* the default value is false*/
ALLWAYS_SIMPLE = false,
```
[top↑](#top_e)

## <a name="no_4_e">Parameter and argument</a>

In order to display the screen cusomized in chilo theme from iBooks and others, add on _chiloflag_ parameter to the URL for accessing to normal moodle site (GET method).   

Fig.1 Chiloflag parameter

|Bit|Contents|
|---|---|
|0|Set to the default layout set in ALLWAYS_SIMPLE|
|1|Set to the Chilo theme layout|
|2|Set to the standard theme layout of Moodle|

Following are the specified examples.

* Set to CHiLO theme layout
http://example.net/course/view.php?id=2&chiloflag=1

[top↑](#top_e)

## <a name="no_5_e">Inquiries</a>

Enter any inquiries, opinions, or requests concernig this software.
-> [Issues](https://github.com/cccties/moodle-theme_chilo/issues)

[top↑](#top_e)

## <a name="no_6_e">Licensing</a>

The CHiLO theme is a 'free' software under the terms of the GNU GPLv3 License. (see [LICENSE.txt](LICENSE.txt)) 
